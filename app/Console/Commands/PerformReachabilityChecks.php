<?php

namespace App\Console\Commands;

use App\Jobs\HandleReachabilityCheck;
use Cache;
use Illuminate\Console\Command;

class PerformReachabilityChecks extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:perform-reachability-checks';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Perform reachability checks for all workspaces';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $workspaces = \App\Models\Workspace::all();
        $bar = $this->output->createProgressBar(count($workspaces));
        $bar->start();
        foreach ($workspaces as $workspace) {
            if($workspace->domain){
                $reachability = Cache::get(key: "workspace.{$workspace->id}.reachability");
                if ($reachability && $reachability['time'] > now()->subMinutes(5)->timestamp) {
                    $bar->advance();
                    continue;
                } else {
                    dispatch(new HandleReachabilityCheck($workspace));
                    $bar->advance();
                }
            }
        }
        $bar->finish();
    }
}
