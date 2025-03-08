<?php

use App\Http\Controllers\KeywordController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return auth()->check() ? redirect()->route('dashboard') : redirect()->route('login');
});

// Dashboard Route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'projects' => \App\Models\Project::with('keywords')->where('user_id', auth()->id())->auth()->user()->isAdmin()->get(),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile Routes (Requires Authentication)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/projects/data', [ProjectController::class, 'getProjectData'])->name('projects.getData');

// Project Routes (Resource Controller)
Route::middleware('auth')->group(function () {
    Route::resource('projects', ProjectController::class);
    Route::delete('/projects/{project}', [ProjectController::class, 'destroy'])->name('projects.destroy');


    // Keywords - Nested under Projects
    Route::resource('projects.keywords', KeywordController::class)->only(['store', 'index']);

    Route::get('/projects/{id}', [ProjectController::class, 'getProjectData']); // New API route
    
    // Keywords Index Page with Auth
    Route::get('/keywords', function () {
        return Inertia::render('Keywords', [
            'projects' => \App\Models\Project::with('keywords')->where('user_id', auth()->id())->auth()->user()->isAdmin()->get(),
        ]);
    })->name('keywords.index');
});

require __DIR__.'/auth.php';
