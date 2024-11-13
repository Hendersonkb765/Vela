<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Mail\InvitationSender;
use App\Services\ChatGPT\OpenAi; // Ensure this namespace is correct according to your project structure
use App\Models\Osc;
use App\Models\Address; // Add this line to import the Address class
use Illuminate\Support\Facades\Auth; // Add this line to import the Auth facade
use Inertia\Inertia; // Add this line to import the Inertia facade


Route::get('/teste-s3={id}',[ActivityController::class,'showMore'])->name('s3');

Route::get('/teste-storage',function(){
    dd(Storage::url('profile-photos-osc/67148786776f4.png'));
});

route::get('/teste-mail/{email}',function($email){

    $dadosMail =Mail::to($email)->send(new InvitationSender('$linkInvitation', '$osc->name', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Crian%C3%A7a_Esperan%C3%A7a.svg', '$osc->presidents_name'));
    dd($dadosMail);

});
Route::get('teste-openai',function(){
    $openai = new OpenAi();
    $response = $openai->chatGPT('Você é um facilitador de uma aceleradora de ONGs, atua ajudando diretores de organização a melhorar os seus processos','Me faça uma descrição de um projeto de esportes diversos para crianças ressaltando a importância dele','gpt-3.5-turbo-0125');

    return response()->json($response);
});
Route::get('/teste2',[ActivityController::class,'index'])->name('teste2');
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
Route::get('/modeltest',function(){
    $axis = Auth::user()->osc->first()->axis->first();
    dd($axis->currentLevel());
});
Route::get('/dashboardtest', function () {
    return Inertia::render('Test');
})->name('dashboardtest');


Route::get('testar-email/{email}',function ($email){
    $mail = Mail::to($email)->send(new InvitationSender('https://www.google.com','OSC Teste','https://upload.wikimedia.org/wikipedia/commons/6/6e/Crian%C3%A7a_Esperan%C3%A7a.svg','Presidente Teste'));
    dd($mail);
});

Route::get('/email-test',function(){
    return view('mail.verifyEmail');
});
Route::get('/env-teste',function(){
    $user = Auth::user();
    $url = URL::temporarySignedRoute(
        'verification.verify', 
        now()->addMinutes(10), 
        ['id' => $user->id, 'hash' => hash('sha256', $user->email)]
    );
    dd($url);
});
Route::delete('deletar-membro',[ActivityController::class,'destroy'])->name('deletar-membro');
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




