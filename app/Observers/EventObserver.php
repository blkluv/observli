<?php

namespace App\Observers;

use App\Models\Event;
use App\Notifications\EventCreated;
use Illuminate\Support\Facades\Cache;

class EventObserver
{
    public function created(Event $event)
    {
        $event->workspace->notify(new EventCreated($event));
        $event->workspace->usage()->create([
            'usable_id' => $event->id,
            'usable_type' => Event::class,
            'type' => config('observli.usage.types.event.created'),
            'timestamp' => $event->created_at
        ]);
        $cache_key = "workspace.{$event->workspace->id}.monthly_event_count";
        if(!Cache::has($cache_key)){
            $monthly_event_count = $event->workspace->events()->where('created_at', '>=', now()->subMonth())->count();
            Cache::put($cache_key, $monthly_event_count);
        } else {
            Cache::increment($cache_key);
        }
    }
}
