<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Cache; // Add this line
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Mail\InvitationCode;
use App\Mail\InvitationSender;
use Illuminate\Support\Facades\Mail;

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


Route::get('/resources', function () {
    return Inertia::render('Resources');
})->name('resources');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});


Route::get('email', function () {

    $email = Mail::to('gustavo.raimundo.rodrigues@gmail.com','Gustavo Noia')->send(new InvitationSender());
    dd($email);
});


Route::get('/dashboardtest', function () {
    return Inertia::render('Test');
})->name('dashboardtest');


require __DIR__.'/auth.php';
