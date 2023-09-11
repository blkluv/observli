<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'slug', 'description', 'workspace_id'];

    public function events()
    {
        return $this->belongsToMany(Event::class);
    }

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }
}
