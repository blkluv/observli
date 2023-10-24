<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Symfony\Component\HttpFoundation\Response;

class EventLimit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if(!config('observli.billing_enabled')){
            return $next($request);
        }
        $workspace = $request->user();
        $limit = config('observli.usage.limits.events.free');
        if($workspace->subscribed('default')){
            $lookup_key = $workspace->subscription('default')->stripe_lookup_key;
            if(str_starts_with($lookup_key, 'startup_')){
                $limit = config('observli.usage.limits.events.startup');
            } else if(str_starts_with($lookup_key, 'pro_')){
                $limit = config('observli.usage.limits.events.pro');
            }
        }
        $cache_key = "workspace.{$workspace->id}.monthly_event_count";
        if(Cache::has($cache_key)){
            $monthly_event_count = Cache::get($cache_key);
        } else {
            $monthly_event_count = $workspace->events()->where('created_at', '>=', now()->subMonth())->count();
        }
        if($monthly_event_count >= $limit){
            return response()->json([
                'message' => 'You have exceeded your monthly event limit. Please upgrade your plan to continue using Observli.'
            ], 403);
        }
        return $next($request);
    }
}
