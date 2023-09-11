<?php

use App\Models\Workspace;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::routes();
Broadcast::channel('App.Models.User.{user_id}', function ($user, $user_id) {
    return (int) $user->id === (int) $user_id;
});
Broadcast::channel('App.Models.Workspace.{workspace_id}', function ($user, $workspace_id) {
    $workspace = Workspace::findOrFail($workspace_id);
    return $user->belongsToWorkspace($workspace);
});
