<?php

namespace App\Http\Controllers\API;

use App\Models\Event;

class EventController extends BaseController
{
    public function index()
    {
        $events = Event::all();
        return $this->sendResponse($events->toArray(), 'Events retrieved successfully.');
    }
}
