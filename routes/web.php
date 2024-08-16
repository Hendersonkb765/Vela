<?php

use App\Http\Controllers\InvitationOscController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\OscController; // Add this line
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/resources/test', function () {
    return Inertia::render('Resources');
})->name('resources');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/osc/criar', [OscController::class, 'store'])->name('osc.store');
});

Route::get('email', function () {
    Route::get('convite/{mail}', [InvitationOscController::class,'sendInvitation']);
    Route::get('validacao/{code}', [InvitationOscController::class,'validateInvitation']);
});

Route::get('register/ds', [RegisteredUserController::class,'store']);

Route::get('/dashboardtest', function () {
    return Inertia::render('Test');
})->name('dashboardtest');

Route::get('/osc', [OscController::class, 'index'])->name('osc.index');


require __DIR__.'/auth.php';
