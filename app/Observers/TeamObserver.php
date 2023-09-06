<?php

namespace App\Observers;

use App\Models\Team;

class TeamObserver
{
    public function created(Team $team): void
    {
        $team->users()->attach([
            $team->user_id => [
                'role' => 'owner',
            ],
        ]);

        $topic = $team->topics()->create([
            'name' => 'general',
            'slug' => 'general',
            'description' => 'This is your team\'s first topic',
        ]);

        $event = $team->events()->create([
            'title' => 'Welcome to your team!',
            'message' => 'This is your team\'s first event',
            'context' => [],
        ]);
        $event->topics()->attach($topic);
    }
}
