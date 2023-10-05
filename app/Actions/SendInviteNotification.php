<?php

namespace App\Actions;

use App\Models\Workspace;
use App\Notifications\WorkspaceInvitation;
use Illuminate\Support\Facades\Notification;

class SendInviteNotification
{
    public function handle(string $email, string $token, Workspace $workspace): void
    {
        Notification::route(
            channel: 'mail',
            route: [$email],
        )->notify(
            notification: new WorkspaceInvitation(
                token: $token,
                workspace: $workspace,
            ),
        );
    }
}
