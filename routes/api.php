<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::get('/projects/keywords', [ProjectController::class, 'getProjectKeywordData']);
Route::middleware(['auth', 'verified', 'web'])->get('/projects/keywords', [ProjectController::class, 'getProjectKeywordData']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
