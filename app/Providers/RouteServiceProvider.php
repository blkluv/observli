<?php

namespace App\Providers;

use App\Objects\HashidManager;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/t/1';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::domain(config('app.domain'))
                ->middleware('web')
                ->group(base_path('routes/web.php'));

        });

        Route::bind('id', function ($value) {
            try {
                return (new HashidManager())->decode($value);
            } catch (\Exception $e) {
                abort(404);
            }
        });

        Route::bind('team_identifier', function ($value) {
            try {
                return (new HashidManager())->decode($value);
            } catch (\Exception $e) {
                abort(404);
            }
        });
    }
}
