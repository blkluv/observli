<?php

namespace App\Http\Middleware;

use App\Data\ApiKeyData;
use App\Data\CurrentWorkspaceData;
use App\Data\UserData;
use App\Data\WorkspaceData;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? UserData::from($request->user()) : null,
            ],
            'currentWorkspace' => $request->user() ? CurrentWorkspaceData::from($request->user()->currentWorkspace) : null,
            'workspaces' => $request->user() ? WorkspaceData::collection($request->user()->workspaces)->toArray() : [],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy())->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
