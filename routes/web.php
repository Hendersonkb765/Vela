<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\InvitationOscController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CompleteRegistrationController;
use App\Http\Controllers\DashboardController;
use App\Http\Middleware\CheckOsc; // Add this line
use App\Http\Middleware\CheckUserRegistration;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UsersListController;
use App\Http\Middleware\DeleteExpiredInvitations;
use Aws\Middleware;
use Illuminate\Http\Request;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function(){
// -----------------------------------------COMPLETANDO REGISTRO DE USUÁRIO------------------------------------------\\
    Route::get('/criar/novo-usuario', [CompleteRegistrationController::class, 'create'])->name('completeRegistration.create')->middleware('auth');
    Route::patch('/criar/novo-usuario', [CompleteRegistrationController::class, 'store'])->name('completeRegistration.store');
    Route::patch('/criar/presidente', [CompleteRegistrationController::class, 'storePresident'])->name('completeRegistration.storePresident');
});


    

Route::middleware(['auth','verified'])->group(function () {

    
    // ---------------------------------------------ACEITAR CONVITE DA OSC------------------------------------------\\

    Route::get('validar-convite/{code}/{oscId}', [InvitationOscController::class,'validateInvitation'])->middleware(['auth',DeleteExpiredInvitations::class])->name('invitation.validate');
    
    Route::get('membros-osc', UsersListController::class)->middleware(['auth',DeleteExpiredInvitations::class])->name('invitation.list');

    
    Route::middleware([CheckUserRegistration::class,CheckOsc::class])->group(function(){

        // -----------------------------------------Enviar CONVITE DA OSC------------------------------------------\\

        Route::post('enviar-convite/', [InvitationOscController::class,'sendInvitation'])->middleware([DeleteExpiredInvitations::class])->name('invitation.send');

        // -----------------------------------------DASHBOARD DO USUÁRIO------------------------------------------\\

        Route::get('/dashboard',[DashboardController::class,'index'])->name('dashboard');
        
        Route::get('/support', function () {
            return Inertia::render('VelaSocialLab/SupportPage/SupportPage');
        })->name('support');
    
        Route::get('/timeline', function () {
            return Inertia::render('VelaSocialLab/Timeline/Timeline');
        })->name('timeline');
        
        Route::get('/seemore', function () {
            return Inertia::render('VelaSocialLab/ActivityHub/Components/SeeMorePage/SeeMorePage');
        })->name('seemore');
    
        Route::get('/axishub', function () {
            return Inertia::render('VelaSocialLab/AxisHub/AxisHub');
        })->name('axishub');
    
        Route::get('/axis', function () {
            return Inertia::render('VelaSocialLab/AxisHub/Axis/Axis');
        })->name('axis');
    
        Route::get('/myuploads', function () {
            return Inertia::render('VelaSocialLab/MyUploads/MyUploads');
        })->name('myuploads');

        Route::get('/settings', function (Request $request) {
            return Inertia::render('VelaSocialLab/Profile/Settings',
            ['storageDrive'=>$request->attributes->get('storageDrive')]);
        })->name('settings');
        // -------------------------------------------------------------------------------------------\\
    

        Route::controller(ActivityController::class)->group(function(){
            Route::get('/activityhub','index')->name('activityhub');
            Route::post('/registrar-atividade', 'store')->name('activity.store');
            Route::post('/atividades/filtro','filter')->name('activity.filter');
            Route::post('/reformular','rephraseDescription')->name('activity.rephraseDescription');
            Route::patch('/atualizar-atividade','update')->name('activity.update');
            Route::get('/atividade/{id}','showMore')->name('activity.showMore');
            Route::delete('/deletar-atividade/{id}','destroy')->name('activity.destroy');
            Route::get('/editar/{id}', 'edit')->name('activity.edit');
        });

        // -----------------------------------------EDITAR PERFIL DO USUÁRIO------------------------------------------\\
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    });
});

Route::get('/profilesetup', function () {
    return Inertia::render('FirstSteps/ProfileSetup/ProfileSetup');
})->name('profilesetup');

Route::get('/isolado', function () {
    return Inertia::render('InvitationPage');
});

Route::get('/not-found', function () {
    abort(404);
});

Route::get('/server-error', function () {
    abort(500);
});




require __DIR__.'/auth.php';
require __DIR__.'/test.php';


// Route::get('/resources/test', function () {
//     return Inertia::render('Resources');
// })->name('resources');

// Route::get('/designtest', function () {
//     return Inertia::render('VelaSocialLab/GuestUser/GuestUser');
// })->name('designtest');
