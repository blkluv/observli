<?php

namespace App\Observers;

use App\Models\Event;
use App\Notifications\EventCreated;

class EventObserver
{
    public function created(Event $event)
    {
        $event->workspace->notify(new EventCreated($event));
    }
}
