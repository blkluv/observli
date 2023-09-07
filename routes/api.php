<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EventController;
use App\Http\Controllers\API\TopicController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/events', [EventController::class, 'index'])->name('events.index');
    Route::post('/events', [EventController::class, 'store'])->name('events.store');
    Route::get('/topics', [TopicController::class, 'topics'])->name('topics.index');
    Route::post('/topics', [TopicController::class, 'store'])->name('topics.store');
    Route::get('/topics/{topic}/events', [TopicController::class, 'events'])->name('topics.events');
    Route::post('/topics/{topic}/events', [TopicController::class, 'storeEvent'])->name('topics.events.store');

    Route::get('user', function (Request $request) {
        return $request->user();
    });
})->name('api.');
