<?php

namespace App\Providers;

use App\Models\Event;
use App\Models\Team;
use App\Models\User;
use Illuminate\Broadcasting\Broadcasters\PusherBroadcaster;
use Illuminate\Broadcasting\BroadcastManager;
use Illuminate\Support\ServiceProvider;
use Pusher\Pusher;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::observe(\App\Observers\EventObserver::class);
        Team::observe(\App\Observers\TeamObserver::class);
        User::observe(\App\Observers\UserObserver::class);

        if($this->app->environment(('local'))) {
            app(BroadcastManager::class)->extend('soketi', function () {
                $pusher = new Pusher(
                    config('broadcasting.connections.pusher.key'),
                    config('broadcasting.connections.pusher.secret'),
                    config('broadcasting.connections.pusher.app_id'),
                    config('broadcasting.connections.pusher.options'),
                    new \GuzzleHttp\Client(['verify' => false]),
                );
                return new PusherBroadcaster($pusher);
            });
        }
    }
}
