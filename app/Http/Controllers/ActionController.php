<?php

namespace App\Http\Controllers;

use App\Models\Action;
use Illuminate\Http\Request;

class ActionController extends Controller
{
    public function execute(Request $request, $id)
    {
        $action = Action::findOrFail($id);

        $request->user()->currentWorkspace->usage()->create([
            'usable_id' => $action->id,
            'usable_type' => Action::class,
            'type' => config('observli.usage.types.action.succeeded'),
            'user_id' => $request->user()->id,
            'timestamp' => now(),
        ]);

        return response()->json([
            'message' => 'Action executed',
        ]);
    }
}
