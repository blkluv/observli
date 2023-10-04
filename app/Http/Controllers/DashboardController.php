<?php

namespace App\Http\Controllers;

use App\Data\EventData;
use App\Data\TopicData;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $events = $request->user()->currentWorkspace->events()
            ->latest()
            ->take(5)
            ->get();

        $topics = $request->user()->currentWorkspace->topics()->get();

        return Inertia::render('Dashboard/Index', [
            'analytics' => [
                'event_count' => $request->user()->currentWorkspace->usage()->eventCreated()->today()->count(),
            ],
            'events' => EventData::collection($events),
        ]);
    }
}
