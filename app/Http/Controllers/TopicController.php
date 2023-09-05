<?php

namespace App\Http\Controllers;

use App\Models\Topic;
use App\Data\FormData;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class TopicController extends Controller
{
    /**
     * Show all of the user's current teams' topics.
     *
     * @return \Inertia\Response
     */
    public function index(): Response
    {
        $topics = Auth::user()->currentTeam->topics()->latest()->get();

        return Inertia::render('Dashboard/Topic/Index', [
            'topics' => FormData::collection($topics),
        ]);
    }

    /**
     * Show the form creation screen.
     *
     * @return \Inertia\Response
     */

    public function create(): Response
    {
        $forms = Auth::user()->currentTeam->forms()->latest()->get();

        return Inertia::render('Dashboard/Topic/Create', [
            'forms' => FormData::collection($forms),
        ]);
    }

    /**
     * Create a new form.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request): RedirectResponse
    {
        Auth::user()->currentTeam->forms()->create([
            'content' => $request->content,
            'title' => $request->title,
        ]);

        return Redirect::to(route('topics.index'));
    }

    /**
     * Display the form management page.
     *
     * @return \Inertia\Response
     */
    public function show($slug): Response
    {
        return Inertia::render('Dashboard/Topic/Show', [
            'topic' => FormData::from(Topic::where('slug', $slug)->firstOrFail()),
        ]);
    }

    /**
     * Show the form edit screen.
     *
     * @return \Inertia\Response
     */

    public function edit($id): Response
    {
        return Inertia::render('Dashboard/Topic/Edit', [
            'form' => FormData::from(Topic::findOrFail($id)),
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
