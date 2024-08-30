<?php

use App\Http\Controllers\InvitationOscController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CompleteRegistrationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OscController; // Add this line
use App\Http\Middleware\CheckOsc; // Add this line
use App\Http\Middleware\CheckUserRegistration;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Psy\VersionUpdater\Checker;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
/*
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
<<<<<<< HEAD
})->middleware(['auth'])->name('dashboard');
// ->middleware(['auth', 'verified'])->name('dashboard');
=======
})->middleware(['auth', 'verified'])->name('dashboard');
*/
Route::get('/dashboard',[DashboardController::class,'index'])->middleware(
    ['auth',CheckUserRegistration::class,
    CheckOsc::class
    ])->name('dashboard');

Route::get('/myuploads', function () {
    return Inertia::render('VelaSocialLab/MyUploads/MyUploads');
})->middleware(['auth'])->name('myuploads');
// ->middleware(['auth', 'verified'])->name('myuploads');

Route::get('/taskhub', function () {
    return Inertia::render('VelaSocialLab/TaskHub/TaskHub');
})->middleware(['auth'])->name('taskhub');
// ->middleware(['auth', 'verified'])->name('taskhub');

Route::get('/axishub', function () {
    return Inertia::render('VelaSocialLab/AxisHub/AxisHub');
})->middleware(['auth'])->name('axishub');
// ->middleware(['auth', 'verified'])->name('axishub');

Route::get('/timeline', function () {
    return Inertia::render('VelaSocialLab/Timeline/Timeline');
})->middleware(['auth'])->name('timeline');
// ->middleware(['auth', 'verified'])->name('axishub');

Route::get('/resources/test', function () {
    return Inertia::render('Resources');
})->name('resources');


Route::middleware('auth')->group(function () {

    Route::get('/modeltest',function(){
        $axis = Auth::user()->osc->first()->axis->first();
        dd($axis->currentLevel());
    });

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/osc/criar', [OscController::class, 'store'])->name('osc.store');

    
    Route::patch('/criar/novo-usuario', [CompleteRegistrationController::class, 'store'])->name('completeRegistration.store');
    Route::get('/criar/novo-usuario', [CompleteRegistrationController::class, 'create'])->name('completeRegistration.create');
    Route::patch('/criar/presidente', [CompleteRegistrationController::class, 'storePresident'])->name('completeRegistration.storePresident');



});

Route::get('convite/{mail}', [InvitationOscController::class,'sendInvitation']);
Route::get('validacao/{code}', [InvitationOscController::class,'validateInvitation']);

Route::get('/dashboardtest', function () {
    return Inertia::render('Test');
})->name('dashboardtest');

Route::get('/profilesetup', function () {
    return Inertia::render('FirstSteps/ProfileSetup/ProfileSetup');
})->name('profilesetup');

Route::get('/teste',function(){
    echo 'teste';
})->name('teste');



require __DIR__.'/auth.php';
