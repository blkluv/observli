<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends Controller
{
    public function index(Request $request)
    {
        $workspace = $request->user();

        return response()->json($workspace->topics);
    }

    public function store(Request $request)
    {
        $workspace = $request->user();

        $topic = $workspace->topics()->firstOrCreate([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return response()->json($topic, 201);
    }

    public function events(Request $request, $topic)
    {
        $workspace = $request->user();

        $topic = $workspace->topics()->where('slug', $topic)->firstOrFail();

        return response()->json($topic->events);
    }
}
