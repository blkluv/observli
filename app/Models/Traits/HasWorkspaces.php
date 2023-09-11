<?php

namespace App\Models\Traits;

use App\Models\Membership;
use App\Models\Workspace;
use App\Objects\OwnerRole;
use Illuminate\Support\Str;

trait HasWorkspaces
{
    /**
     * Determine if the given workspace is the current workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function isCurrentWorkspace($workspace)
    {
        return $workspace->id === $this->currentWorkspace->id;
    }

    /**
     * Get the current workspace of the user's context.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function currentWorkspace()
    {
        if (is_null($this->current_workspace_id) && $this->id) {
            $this->switchWorkspace($this->personalWorkspace());
        }

        return $this->belongsTo(Workspace::class, 'current_workspace_id');
    }

    /**
     * Switch the user's context to the given workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function switchWorkspace($workspace)
    {
        if (! $this->belongsToWorkspace($workspace)) {
            return false;
        }

        $this->forceFill([
            'current_workspace_id' => $workspace->id,
        ])->save();

        $this->setRelation('currentWorkspace', $workspace);

        return true;
    }

    /**
     * Get all of the workspaces the user owns or belongs to.
     *
     * @return \Illuminate\Support\Collection
     */
    public function allWorkspaces()
    {
        return $this->ownedWorkspaces->merge($this->workspaces)->sortBy('name');
    }

    /**
     * Get all of the workspaces the user owns.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ownedWorkspaces()
    {
        return $this->hasMany(Workspace::class);
    }

    /**
     * Get all of the workspaces the user belongs to.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function workspaces()
    {
        return $this->belongsToMany(Workspace::class, Membership::class)
            ->withPivot('role')
            ->as('membership');
    }

    /**
     * Get the user's "personal" workspace.
     *
     * @return \App\Models\Workspace
     */
    public function personalWorkspace()
    {
        return $this->ownedWorkspaces->first();
    }

    /**
     * Determine if the user owns the given workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function ownsWorkspace($workspace)
    {
        if (is_null($workspace)) {
            return false;
        }

        return $this->id == $workspace->{$this->getForeignKey()};
    }

    /**
     * Determine if the user belongs to the given workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function belongsToWorkspace($workspace)
    {
        if (is_null($workspace)) {
            return false;
        }

        return $this->ownsWorkspace($workspace) || $this->workspaces->contains(function ($t) use ($workspace) {
            return $t->id === $workspace->id;
        });
    }

    /**
     * Get the role that the user has on the workspace.
     *
     * @param  mixed  $workspace
     * @return \Laravel\Jetstream\Role|null
     */
    public function workspaceRole($workspace)
    {
        if ($this->ownsWorkspace($workspace)) {
            return new OwnerRole();
        }

        if (! $this->belongsToWorkspace($workspace)) {
            return;
        }

        $role = $workspace->users
            ->where('id', $this->id)
            ->first()
            ->membership
            ->role;

        return $role ? Jetstream::findRole($role) : null;
    }

    /**
     * Determine if the user has the given role on the given workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function hasWorkspaceRole($workspace, string $role)
    {
        if ($this->ownsWorkspace($workspace)) {
            return true;
        }

        return $this->belongsToWorkspace($workspace) && optional(Jetstream::findRole($workspace->users->where(
            'id',
            $this->id
        )->first()->membership->role))->key === $role;
    }

    /**
     * Get the user's permissions for the given workspace.
     *
     * @param  mixed  $workspace
     * @return array
     */
    public function workspacePermissions($workspace)
    {
        if ($this->ownsWorkspace($workspace)) {
            return ['*'];
        }

        if (! $this->belongsToWorkspace($workspace)) {
            return [];
        }

        return (array) optional($this->workspaceRole($workspace))->permissions;
    }

    /**
     * Determine if the user has the given permission on the given workspace.
     *
     * @param  mixed  $workspace
     * @return bool
     */
    public function hasWorkspacePermission($workspace, string $permission)
    {
        if ($this->ownsWorkspace($workspace)) {
            return true;
        }

        if (! $this->belongsToWorkspace($workspace)) {
            return false;
        }

        $permissions = $this->workspacePermissions($workspace);

        return in_array($permission, $permissions) ||
               in_array('*', $permissions) ||
               (Str::endsWith($permission, ':create') && in_array('*:create', $permissions)) ||
               (Str::endsWith($permission, ':update') && in_array('*:update', $permissions));
    }
}
