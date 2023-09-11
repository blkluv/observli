<?php

namespace App\Actions;

use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;

class ValidateWorkspaceDeletion
{
    /**
     * Validate that the workspace can be deleted by the given user.
     *
     * @param  mixed  $user
     * @param  mixed  $workspace
     * @return void
     */
    public function validate($user, $workspace)
    {
        Gate::forUser($user)->authorize('delete', $workspace);

        if ($user->ownsWorkspace($workspace)) {
            throw ValidationException::withMessages([
                'workspace' => __('You may not delete your personal workspace.'),
            ])->errorBag('deleteWorkspace');
        }
    }
}
