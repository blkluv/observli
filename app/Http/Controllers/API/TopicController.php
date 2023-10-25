<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\EventResource;
use App\Http\Resources\TopicResource;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class TopicController extends BaseController
{
    public function index(Request $request)
    {
        $workspace = $request->user();

        return $this->sendResponse(TopicResource::collection($workspace->topics));
    }

    public function store(Request $request)
    {
        $workspace = $request->user();

        $slugged = Str::slug($request->name);

        if($workspace->topics()->where('slug', $slugged)->exists()) {
            return $this->sendError('Topic already exists', 409);
        }
        $topic = $workspace->topics()->create([
            'name' => $slugged,
            'slug' => $slugged,
            'description' => $request->description ?? "A topic created via the API",
        ]);
        return $this->sendResponse(new TopicResource($topic), 201);
    }

    public function events(Request $request, $topic)
    {
        $workspace = $request->user();

        $topic = $workspace->topics()->where('slug', $topic)->firstOrFail();

        return $this->sendResponse(EventResource::collection($topic->events));
    }
}
