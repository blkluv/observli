<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'context' => 'object'
    ];

    protected $fillable = [
        'type',
        'context',
    ];

    protected static function booted()
    {
        static::creating(function ($action) {
            if ($action->context === null) {
                $action->context = (object) [];
            }
        });
    }

    public function event()
    {
        return $this->belongsTo(Event::class);
    }

    public function usage()
    {
        return $this->morphOne(Usage::class, 'usable');
    }

    public function getIsExecutedAttribute()
    {
        return $this->usage()->successfulAction()->exists();
    }
}
