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

    public function executeAction(Request $request, $id)
    {
        $event = $request->user()->currentWorkspace->events()->findOrFail($id);
        $action = $request->action;

        $request->user()->currentWorkspace->usage()->create([
            'type' => config('observli.usage.types.action.succeeded'),
            'user_id' => $request->user()->id,
            'timestamp' => now(),
        ]);

        return response()->json([
            'message' => 'Action executed',
        ]);
    }
}
