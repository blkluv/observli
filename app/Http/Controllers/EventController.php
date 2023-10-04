<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Data\EventData;

class EventController extends Controller
{
    public function show(Request $request, $id)
    {
        $event = $request->user()->currentWorkspace->events()->findOrFail($id);
        return Inertia::render('Dashboard/Event/Show', [
            'event' => EventData::from($event),
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $event = $request->user()->currentWorkspace->events()->findOrFail($id);
        $event->delete();
        return redirect()->route('dashboard');
    }
}
