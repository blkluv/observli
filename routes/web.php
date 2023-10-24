<?php

use App\Http\Controllers\ActionController;
use App\Http\Controllers\ApiTokenController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\WorkspaceController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('auth')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('home');
    Route::get('/t', [TopicController::class, 'index'])->name('topics.index');
    Route::get('/t/{id}', [TopicController::class, 'show'])->name('topics.show');
    Route::get('/e/{id}', [EventController::class, 'show'])->name('events.show');

    Route::get('/subscription/billing', [SubscriptionController::class, 'redirectToBillingPortal'])->name('subscription.billing');
    Route::get('/subscription/checkout', [SubscriptionController::class, 'redirectToCheckout'])->name('subscription.checkout');

    Route::post('/actions/{id}/execute', [ActionController::class, 'execute'])->name('actions.execute');

    Route::delete('/events/{id}', [EventController::class, 'destroy'])->name('events.destroy');

    Route::post('/tokens', [ApiTokenController::class, 'store'])->name('tokens.store');
    Route::delete('/tokens/{id}', [ApiTokenController::class, 'destroy'])->name('tokens.destroy');

    Route::post('/workspaces', [WorkspaceController::class, 'store'])->name('workspaces.store');
    Route::patch('/workspaces', [WorkspaceController::class, 'update'])->name('workspaces.update');
    Route::post('/workspaces/switch/{id}', [WorkspaceController::class, 'switch'])->name('workspaces.switch');
    Route::delete('/workspaces', [WorkspaceController::class, 'destroy'])->name('workspaces.destroy');
    Route::post('/workspaces/{id}/invite', [WorkspaceController::class, 'invite'])->name('workspaces.invite');

    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
