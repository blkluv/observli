<?php

namespace App\Jobs;

use App\Actions\SendInviteNotification;
use App\Models\Workspace;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HandleWorkspaceInvite implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public readonly string $email,
        public readonly string $token,
        public readonly Workspace $workspace,
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        (new SendInviteNotification())->handle(email: $this->email, token: $this->token, workspace: $this->workspace);
    }
}
