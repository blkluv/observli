<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WorkspaceController extends Controller
{
    public function store(Request $request)
    {
        $workspace = $request->user()->ownedWorkspaces()->create([
            'name' => $request->name,
            'domain' => $request->domain,
            'avatar' => $request->avatar == "" ? null : $request->avatar,
        ]);
        $request->user()->switchWorkspace($workspace);
        return redirect()->route('dashboard');
    }

    public function switch(Request $request, $id)
    {
        $workspace = $request->user()->workspaces()->findOrFail($id);
        $request->user()->switchWorkspace($workspace);
        return redirect()->route('dashboard');
    }
}
