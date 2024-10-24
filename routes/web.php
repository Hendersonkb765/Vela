<?php

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\InvitationOscController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\CompleteRegistrationController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\OscController; // Add this line
use App\Http\Middleware\CheckOsc; // Add this line
use App\Http\Middleware\CheckUserRegistration;
use App\Models\Axis;
use App\Models\Level;
use App\Models\Osc;
use App\Models\User; // Add this line
use App\Models\Task; // Add this line
use App\Models\Address; // Add this line
use App\Models\GoogleToken; // Add this line
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Psy\VersionUpdater\Checker;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;
use Google\Client;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;
use App\Http\Controllers\Services\Google\DriveController;
use App\Http\Controllers\UsersListController;
use App\Http\Middleware\CheckGoogleConnection;
use App\Http\Middleware\DeleteExpiredInvitations;
use App\Models\Activity;
use App\Models\GoogleDriveFolder;
use App\Models\GoogleDriveFile;
use App\Services\Google\Drive\File;
use App\Services\Google\Drive\Folder;
use App\Services\Google\Drive\GoogleDrive;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite; // Add this line
use Illuminate\Support\Facades\Mail; // Add this line
use App\Services\ChatGPT\OpenAi;
use Faker\Guesser\Name;
use App\Mail\InvitationSender; // Add this line
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpKernel\Profiler\Profile;

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

// ->middleware(['auth', 'verified'])->name('Configurações');


// ->middleware(['auth', 'verified'])->name('myuploads');



// ->middleware(['auth', 'verified'])->name('myuploads');


// Route::get('/activityhub', function () {
//     return Inertia::render('VelaSocialLab/ActivityHub/ActivityHub');
// })->middleware(['auth'])->name('activityhub');
// ->middleware(['auth', 'verified'])->name('axishub');

// route('activity.filter',)
// ->middleware(['auth', 'verified'])->name('taskhub');


// ->middleware(['auth', 'verified'])->name('axishub');


// ->middleware(['auth', 'verified'])->name('axishub');

// ->middleware(['auth', 'verified'])->name('axishub');

// ->middleware(['auth', 'verified'])->name('axishub');





Route::middleware(['auth','verified'])->group(function () {

    // -----------------------------------------COMPLETANDO REGISTRO DE USUÁRIO------------------------------------------\\
    Route::patch('/criar/novo-usuario', [CompleteRegistrationController::class, 'store'])->name('completeRegistration.store');
    Route::get('/criar/novo-usuario', [CompleteRegistrationController::class, 'create'])->name('completeRegistration.create');
    Route::patch('/criar/presidente', [CompleteRegistrationController::class, 'storePresident'])->name('completeRegistration.storePresident');
    
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
            Route::post('/atualizar-atividade','update')->name('activity.update');
            Route::get('/atividade/{id}','show')->name('activity.showMore');
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
