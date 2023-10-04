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

        return Inertia::render('Dashboard/Index', [
            'analytics' => [
                'action_count' => $request->user()->currentWorkspace->usage()->successfulAction()->today()->count(),
                'event_count' => $request->user()->currentWorkspace->usage()->eventCreated()->today()->count(),
                'event_daily_change' => $request->user()->currentWorkspace->daily_event_change_percentage,
                'action_daily_change' => $request->user()->currentWorkspace->daily_action_change_percentage,
                'daily_event_count' => $request->user()->currentWorkspace->getDailyEventCount(7),
            ],
            'events' => EventData::collection($events),
        ]);
    }
}
