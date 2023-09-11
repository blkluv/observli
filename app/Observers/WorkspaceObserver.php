<?php

namespace App\Observers;

use App\Models\Workspace;

class WorkspaceObserver
{
    public function created(Workspace $workspace): void
    {
        $workspace->users()->attach([
            $workspace->user_id => [
                'role' => 'owner',
            ],
        ]);

        $topic = $workspace->topics()->create([
            'name' => 'general',
            'slug' => 'general',
            'description' => 'This is your workspace\'s first topic',
        ]);

        $event = $workspace->events()->create([
            'title' => 'Welcome to your workspace!',
            'subtitle' => 'This is your workspace\'s first event',
        ]);
        $event->topics()->attach($topic);
    }
}
