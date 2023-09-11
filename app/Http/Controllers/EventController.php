<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Data\EventData;
use App\Data\TopicData;

class EventController extends Controller
{
    public function show(Request $request, $id)
    {
        $event = $request->user()->currentWorkspace->events()->findOrFail($id);
        $topics = $request->user()->currentWorkspace->topics()->get();
        return Inertia::render('Dashboard/Event/Show', [
            'event' => EventData::from($event),
            'topics' => TopicData::collection($topics)
        ]);
    }
}
