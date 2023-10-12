<?php

namespace App\Http\Controllers;

use App\Models\WorkspaceInvitation;
use App\Jobs\HandleWorkspaceInvite;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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

    public function invite(Request $request, $id)
    {
        $workspace = $request->user()->workspaces()->findOrFail($id);
        $request->validate([
            'email' => 'required|email',
            'name' => 'required|string|min:2',
        ]);
        do {
            $token = Str::random(17);
        } while (WorkspaceInvitation::where('token', $token)->exists());
        $workspace->invitations()->create([
            'email' => $request->email,
            'role' => $request->role,
            'name' => $request->name,
            'token' => $token,
        ]);
        dispatch(new HandleWorkspaceInvite(
            email: $request->email,
            token: $token,
            workspace: $workspace,
        ));
        return redirect()->route('dashboard');
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|max:140',
            'domain' => 'active_url',
            'avatar' => 'active_url'
        ]);

        $workspace = $request->user()->currentWorkspace()->update([
            'name' => $request->name,
            'domain' => $request->domain ?? null,
            'avatar' => $request->avatar ?? null,
        ]);

        return back();
    }

    public function destroy(Request $request)
    {
        $request->user()->currentWorkspace()->delete();
        $request->user()->switchWorkspace($request->user()->ownedWorkspaces()->first());

        return redirect()->route('dashboard');
    }
}
