<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function created(User $user): void
    {
        $user->ownedWorkspaces()->create([
            'name' => "My Workspace",
        ]);
        $user->switchWorkspace($user->ownedWorkspaces()->first());
    }
}
