<?php

namespace App\Actions;

use App\Rules\Role;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Validator;

class UpdateWorkspaceMemberRole
{
    /**
     * Update the role for the given workspace member.
     *
     * @param  mixed  $user
     * @param  mixed  $workspace
     * @param  int  $workspaceMemberId
     */
    public function update($user, $workspace, $workspaceMemberId, string $role): void
    {
        Gate::forUser($user)->authorize('updateWorkspaceMember', $workspace);

        Validator::make([
            'role' => $role,
        ], [
            'role' => ['required', 'string', new Role()],
        ])->validate();

        $workspace->users()->updateExistingPivot($workspaceMemberId, [
            'role' => $role,
        ]);
    }
}
