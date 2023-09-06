<?php

namespace App\Observers;

use App\Models\User;

class UserObserver
{
    public function created(User $user): void
    {
        $user->ownedTeams()->create([
            'name' => "My Workspace",
        ]);
        $user->switchTeam($user->ownedTeams()->first());
    }
}
