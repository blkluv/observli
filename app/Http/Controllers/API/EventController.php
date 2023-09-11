<?php

namespace App\Http\Controllers\API;

use App\Data\EventData;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EventController extends BaseController
{
    public function index(Request $request)
    {
        $workspace = $request->user();

        return response()->json(EventData::collection($workspace->events));
    }

    public function store(Request $request)
    {
        $workspace = $request->user();

        $payload = [
            'title' => $request->title,
            'context' => (object) $request->context,
            'message' => $request->message ?? null,
            'workspace_id' => $workspace->id,
        ];

        $event = Event::create($payload);

        $topics = $request->topics ?? ["general"];

        foreach($topics as $topic) {
            $topic = $workspace->topics()->firstOrCreate([
                'name' => $topic,
                'slug' => Str::slug($topic),
            ]);
            if($topic->wasRecentlyCreated) {
                $topic->update(['description' => 'A topic created by an event']);
            }
            $event->topics()->attach($topic);
        }

        return response()->json(EventData::from($event), 201);
    }

    public function show(Request $request, $id)
    {
        $workspace = $request->user();

        $event = Event::findOrFail($id);

        return response()->json(EventData::from($event));
    }
}
