<?php

namespace App\Http\Controllers;

use App\Data\EventData;
use App\Models\Topic;
use App\Data\TopicData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TopicController extends Controller
{
    /**
     * Show all of the user's current workspaces' topics.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        return Inertia::render('Dashboard/Topic/Index');
    }

    // /**
    //  * Create a new topic.
    //  *
    //  * @param  \Illuminate\Http\Request  $request
    //  * @return \Illuminate\Http\RedirectResponse
    //  */
    // public function store(Request $request): RedirectResponse
    // {
    //     Auth::user()->currentWorkspace->forms()->create([
    //         'content' => $request->content,
    //         'title' => $request->title,
    //     ]);

    //     return Redirect::to(route('topics.index'));
    // }

    /**
     * Display the topic page.
     *
     * @return \Inertia\Response
     */
    public function show($id): Response
    {
        $topic = Topic::findOrFail($id);
        $events = $topic->events()->latest()->get();
        $topics = Auth::user()->currentWorkspace->topics()->get();

        return Inertia::render('Dashboard/Topic/Show', [
            'events' => EventData::collection($events),
            'topic' => TopicData::from($topic),
            'topics' => TopicData::collection($topics),
        ]);
    }

    /**
     * Delete the topic.
     */
    public function destroy($id): RedirectResponse
    {
        try {
            Topic::findOrFail($id)->delete();
        } catch (\Exception $e) {
            return Redirect::to(route('topics.index'));
        }
        return Redirect::to(route('topics.index'));
    }
}
