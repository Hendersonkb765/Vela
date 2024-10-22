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
