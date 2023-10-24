<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\ActionResource;
use App\Models\Action;
use Illuminate\Http\Request;

class ActionController extends BaseController
{
    public function index(Request $request)
    {
        $workspace = $request->user();

        return $this->sendResponse(ActionResource::collection($workspace->actions));
    }

    public function show(Request $request, $id)
    {
        $workspace = $request->user();

        $action = Action::findOrFail($id);

        return $this->sendResponse(new ActionResource($action));
    }
}
