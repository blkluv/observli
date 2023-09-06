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
        $team = $request->user();

        return response()->json(EventData::collection($team->events));
    }

    public function store(Request $request)
    {
        $team = $request->user();

        $payload = [
            'title' => $request->title,
            'context' => $request->context,
            'message' => $request->message ?? null,
            'team_id' => $team->id,
        ];

        $event = Event::create($payload);

        foreach($request->topics as $topic) {
            $topic = $team->topics()->firstOrCreate([
                'name' => $topic,
                'slug' => Str::slug($topic),
            ]);
            $event->topics()->attach($topic);
        }

        return response()->json(EventData::from($event), 201);
    }
}
