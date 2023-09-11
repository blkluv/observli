<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    protected $fillable = ['name', 'slug', 'description'];

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }
}
