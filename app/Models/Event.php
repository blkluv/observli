<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'context' => 'object'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'context',
        'subtitle',
        'title'
    ];


    protected static function booted()
    {
        static::creating(function ($event) {
            if ($event->context === null) {
                $event->context = (object) [];
            }
        });
    }

    public function actions()
    {
        return $this->hasMany(Action::class);
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }

    public function usage()
    {
        return $this->morphOne(Usage::class, 'usable');
    }

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }

    public function scopeRetained($query)
    {
        if(!$this->workspace->subscribed('default')){
            $retention_period = config('observli.usage.retention.free');
            return $query->where('created_at', '>=', now()->subDays($retention_period));
        }
        return $query;
    }
}
