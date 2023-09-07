<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $team = $request->user();

        return response()->json($team->topics);
    }

    public function store(Request $request)
    {
        $team = $request->user();

        $topic = $team->topics()->firstOrCreate([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return response()->json($topic, 201);
    }

    public function events(Request $request, $topic)
    {
        $team = $request->user();

        $topic = $team->topics()->where('slug', $topic)->firstOrFail();

        return response()->json($topic->events);
    }
}
