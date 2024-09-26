<?php

namespace App\Services\Google\Drive;

use Google\Client;
use App\Models\GoogleToken;


class GoogleDrive{

    protected $client;

    function __construct($oscId)
    {
        $this->client = new Client();
        $this->client->setApplicationName('Vela_Social_Lab');
        $this->client->setClientId(env('GOOGLE_CLIENT_ID'));
        $this->client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
        $this->client->setAccessType('offline');

        $token = GoogleToken::where('osc_id', $oscId)->first();
        if($token){
            $this->client->setAccessToken($token->access_token);
            
            if($this->client->isAccessTokenExpired()){
                if($token->refresh_token){
                    $newToken = $this->client->fetchAccessTokenWithRefreshToken($token->refresh_token);
                    $token->update([
                        'access_token' => $newToken['access_token'],
                        'expires_at' => now()->addSeconds($newToken['expires_in'])
                    ]);
                    $this->client->setAccessToken($newToken['access_token']);
                }else{
                     // Redireciona para a URL de autenticação do Google
                     $authUrl = $this->client->createAuthUrl();
                     return redirect($authUrl);
                }

            }

        }
    }

   
}