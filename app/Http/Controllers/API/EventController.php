<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EventController extends BaseController
{
    public function index(Request $request)
    {
        $workspace = $request->user();

        return $this->sendResponse(EventResource::collection($workspace->events));
    }

    public function store(Request $request)
    {
        $workspace = $request->user();

        $payload = [
            'title' => $request->title,
            'context' => (object) $request->context,
            'subtitle' => $request->subtitle ?? null,
        ];

        $event = $workspace->events()->create($payload);

        $topics = $request->topics ?? ["general"];
        foreach($topics as $t) {
            $slugged = Str::slug($t);
            $topic = $workspace->topics()->firstOrCreate([
                'name' => $slugged,
                'slug' => $slugged,
            ]);
            if($topic->wasRecentlyCreated) {
                $topic->update(['description' => 'A topic created by an event']);
            }
            $event->topics()->attach($topic);
        }

        $actions = $request->actions ?? [];
        foreach($actions as $action) {
            $event->actions()->create([
                'type' => $action['type'],
                'context' => (object) $action['context'] ?? (object) [],
            ]);
        }

        return $this->sendResponse(new EventResource($event), 201);
    }

    public function show(Request $request, $id)
    {
        $workspace = $request->user();

        $event = Event::findOrFail($id);

        return $this->sendResponse(new EventResource($event));
    }
}
