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
        'actions' => 'array',
        'context' => 'object'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'actions',
        'context',
        'subtitle',
        'title'
    ];


    protected static function booted()
    {
        static::creating(function ($event) {
            if($event->actions === null) {
                $event->actions = [];
            }
            if ($event->context === null) {
                $event->context = (object) [];
            }
        });
    }

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }
}
