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
        'context' => 'array'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'team_id',
        'context',
        'subtitle',
        'title'
    ];

    public function topics()
    {
        return $this->belongsToMany(Topic::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
