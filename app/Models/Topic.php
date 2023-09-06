<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'description', 'team_id'];

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
