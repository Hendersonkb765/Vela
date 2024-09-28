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
use App\Models\Activity;
use App\Models\GoogleDriveFile;
use App\Services\Google\Drive\File;
use App\Services\Google\Drive\Folder;
use App\Services\Google\Drive\GoogleDrive;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite; // Add this line
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
    ['auth', 'verified',CheckUserRegistration::class,
    CheckOsc::class
])->name('dashboard');

Route::get('/settings', function () {
    return Inertia::render('VelaSocialLab/Profile/Settings');
})->middleware(['auth'])->name('settings');
// ->middleware(['auth', 'verified'])->name('Configurações');

Route::get('/myuploads', function () {
    return Inertia::render('VelaSocialLab/MyUploads/MyUploads');
})->middleware(['auth'])->name('myuploads');
// ->middleware(['auth', 'verified'])->name('myuploads');

Route::controller(ActivityController::class)->group(function(){
    Route::get('/taskhub','index')->middleware(['auth'])->name('taskhub');
    Route::post('/registrar-atividade', 'store')->name('activity.store');
    Route::get('/atividades/filtro={title}','filterByName')->name('activity.filterByName');

});

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
Route::get('/registrar-atividade', [ActivityController::class,'create'])->name('activity.create');
Route::post('/registrar-atividade', [ActivityController::class,'store'])->name('activity.store');

/////////////// ROTAS PARA TESTES //////////////////////////
Route::get('/teste',function(){
    $osc = Osc::find(2);
    $address = new Address([
        'counties' => 'Example City',
        'neighborhood' => 'Example Neighborhood',
        'state' => 'Example State',
        'cep' => '12345-678',
        'street' => 'Example Street',
        'number' => '123',
        'complement' => 'Apt 456',
    ]);
    dd($osc->address()->save($address));
    //dd($osc->first()->task->first()->pivot->status);
    //$osc->task()->updateExistingPivot($osc->task->first()->id,['status'=>'concluído']);
    //$osc->save();

})->name('teste');

Route::get('/teste2',[ActivityController::class,'index'])->name('teste2');
Route::get('/criar-arquivo',function(){
    $driveFile = new Folder(Auth::user()->osc->first()->id);
    $driveFile->createDefaultDirectories();
    return response()->json(['status'=>200,'message' => 'Arquivo criado com sucesso']);
});
Route::get('/formulario',function(){
    $driveFolder = new Folder(Auth::user()->osc->first()->id);
    $driveFolder->createDefaultDirectories();
    return response()->json(['status'=>200,'message' => 'Pastas criadas com sucesso']);
    return view('Formulario');
});
Route::post('/drive',function(Request $request){
    $fileDatabase = $request->file('database');
    $driveFile = new File(Auth::user()->osc->first()->id);
    $driveFile->update("1B2idd4NaTyc7vT4RzIbh_QOUq-q6cvfm",$fileDatabase);

})->name('formulario');



require __DIR__.'/auth.php';
