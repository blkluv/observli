<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usage extends Model
{
    protected $fillable = [
        'type',
        'timestamp',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }

    public function scopeEventCreated($query)
    {
        return $query->where('type', config('observli.usage.types.event.created'));
    }

    public function scopeSuccessfulAction($query)
    {
        return $query->where('type', config('observli.usage.types.action.succeeded'));
    }

    public function scopeToday($query)
    {
        return $query->whereDay('timestamp', date('d'))->get();
    }

    public function scopeYesterday($query)
    {
        return $query->whereDay('timestamp', date('d', strtotime('-1 day')))->get();
    }
}
