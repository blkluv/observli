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
Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});
Broadcast::channel('App.Models.Workspace.{id}', function ($user, $id) {
    $workspace = Workspace::findOrFail($id);
    return $user->belongsToWorkspace($workspace);
});
