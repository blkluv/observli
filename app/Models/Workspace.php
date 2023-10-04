<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class Workspace extends Model
{
    use HasApiTokens;
    use Notifiable;
    use SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = ['name', 'domain', 'avatar'];

    /**
     * Get all of the forms for the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function events()
    {
        return $this->hasMany(Event::class);
    }

    /**
     * Get all of the topics for the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    /**
     * Get the owner of the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * Get all of the workspace's users including its owner.
     *
     * @return \Illuminate\Support\Collection
     */
    public function allUsers()
    {
        return $this->users->merge([$this->owner]);
    }

    /**
     * Get all of the users that belong to the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class, Membership::class)
            ->withPivot('role')
            ->withTimestamps()
            ->as('membership');
    }

    /**
     * Determine if the given user belongs to the workspace.
     *
     * @param  \App\Models\User  $user
     * @return bool
     */
    public function hasUser($user)
    {
        return $this->users->contains($user) || $user->ownsWorkspace($this);
    }

    /**
     * Determine if the given email address belongs to a user on the workspace.
     *
     * @return bool
     */
    public function hasUserWithEmail(string $email)
    {
        return $this->allUsers()->contains(function ($user) use ($email) {
            return $user->email === $email;
        });
    }

    /**
     * Determine if the given user has the given permission on the workspace.
     *
     * @param  \App\Models\User  $user
     * @param  string  $permission
     * @return bool
     */
    public function userHasPermission($user, $permission)
    {
        return $user->hasWorkspacePermission($this, $permission);
    }

    /**
     * Get all of the pending user invitations for the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }

    /**
     * Remove the given user from the workspace.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    public function removeUser($user)
    {
        if ($user->current_workspace_id === $this->id) {
            $user->forceFill([
                'current_workspace_id' => null,
            ])->save();
        }

        $this->users()->detach($user);
    }

    /**
     * Get all of the usage records for the workspace.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function usage()
    {
        return $this->hasMany(Usage::class);
    }

    /**
     * Purge all of the workspace's resources.
     *
     * @return void
     */
    public function purge()
    {
        $this->owner()->where('current_workspace_id', $this->id)
            ->update(['current_workspace_id' => null]);

        $this->users()->where('current_workspace_id', $this->id)
            ->update(['current_workspace_id' => null]);

        $this->users()->detach();

        $this->delete();
    }

    public function getDailyEventChangePercentageAttribute()
    {
        $today = $this->usage()->eventCreated()->today()->count();
        $yesterday = $this->usage()->eventCreated()->yesterday()->count();

        if($today == 0 && $yesterday == 0) {
            return "0%";
        }

        if ($yesterday == 0) {
            return "+100%";
        }

        $change = round((($today - $yesterday) / $yesterday) * 100);

        return $yesterday > $today ? "-{$change}%" : "+{$change}%";
    }

    public function getDailyActionChangePercentageAttribute()
    {
        $today = $this->usage()->successfulAction()->today()->count();
        $yesterday = $this->usage()->successfulAction()->yesterday()->count();

        if($today == 0 && $yesterday == 0) {
            return "0%";
        }

        if ($yesterday == 0) {
            return "+100%";
        }

        $change = round((($today - $yesterday) / $yesterday) * 100);

        return $yesterday > $today ? "-{$change}%" : "+{$change}%";
    }
}
