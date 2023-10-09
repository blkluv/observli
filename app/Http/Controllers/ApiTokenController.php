<?php

namespace App\Http\Controllers;

use App\Objects\HashidManager;
use Illuminate\Http\Request;

class ApiTokenController extends Controller
{
    /**
     * Store a new personal access token for the workspace.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $token = $request->user()->currentWorkspace->createToken('api');
        $hashid = new HashidManager();
        return response()->json([
            'token' => $token->plainTextToken,
            'id' => $hashid->encode($token->accessToken->id),
        ]);
    }

    /**
     * Delete the given personal access token.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request, $id)
    {
        $request->user()->currentWorkspace->tokens()->where('id', $id)->delete();
        return back();
    }
}
