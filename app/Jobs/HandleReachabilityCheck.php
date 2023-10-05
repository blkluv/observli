<?php

namespace App\Jobs;

use App\Actions\GetHostPing;
use App\Models\Workspace;
use Cache;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class HandleReachabilityCheck implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public readonly Workspace $workspace,
    ) {
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        if(!$this->workspace->domain){
            return;
        }
        $ping = (new GetHostPing())->handle(domain: $this->workspace->domain);
        Cache::put(
            key: "workspace.{$this->workspace->id}.reachability",
            value: [
                'ping' => $ping,
                'time' => now()->timestamp,
            ],
        );
    }
}
