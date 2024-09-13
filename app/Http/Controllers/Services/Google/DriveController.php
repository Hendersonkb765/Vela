<?php

namespace App\Http\Controllers\Services\Google;

use App\Http\Controllers\Controller;
use App\Models\GoogleToken;
use Illuminate\Http\Request;
use Google\Client;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;
class DriveController extends Controller
{
    protected $client;
    public function __construct() {
        $this->client = new Client();
        $this->client->setApplicationName('Vela_Social_Lab');
        $this->client->setClientId(env('GOOGLE_CLIENT_ID'));
        $this->client->setClientSecret(env('GOOGLE_CLIENT_SECRET'));
        $this->client->setAccessType('offline');

        
        $token = GoogleToken::first();
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

    public function viewAllFiles(Request $request) {
        $drive = new Drive($this->client);
        $files = $drive->files->listFiles([
            'q' => "'root' in parents",
            'fields' => 'files(id, name)'
        ]);

        foreach ($files->files as $file) {
            echo $file->name . '<br>';
        }


    }
    public function locateFolder($folderName = null, $parentFolderId = null) {
        $folderName = "Imagens";
        $parentFolderId = "1qrkJN9LJGTtQGrRr1qKl9_oeDGY1mN4t";
        $drive = new Drive($this->client);
        $queryParent = $parentFolderId!=null? " and '$parentFolderId' in parents":'';
        $files = $drive->files->listFiles([
        'q' => "mimeType='application/vnd.google-apps.folder' and name='$folderName'",
            'fields' => 'files(id, name,createdTime)'
        ]);
        $locatedFolders = [];
        dd($files);
        foreach ($files->files as $file) {
            
            array_push($locatedFolders,['id'=> $file->id,'name' => $file->name,'createdTime' => $file->createdTime]);
        }
        dd($locatedFolders);
        return response()->json($locatedFolders);
    }
    public function createDefaultDirectories(){
        $drive = new Drive($this->client);
        $folderMetadata = new DriveFile([
            'name' => 'Velaae_Social_lab',
            'mimeType' => 'application/vnd.google-apps.folder'
        ]);
        $local = $drive->createFolder($folderMetadata, [
            'fields' => 'id'
        ]);
        $folderMetadata = new DriveFile([
            'name' => '',
            'mimeType' => 'application/vnd.google-apps.folder',
            'parents' => [$local->id]
        ]);
        $images = $drive->createFolder($folderMetadata, [
            'fields' => 'id'
        ]);


    }
    public function createFolder() {
        $drive = new Drive($this->client);
        $folderMetadata = new DriveFile([
            'name' => 'CRIADO NO LARAVEL',
            'mimeType' => 'application/vnd.google-apps.folder'
        ]);
    
        $folder = $drive->files->create($folderMetadata, [
            'fields' => 'id'
        ]);
    
        return response()->json(['folderId' => $folder->id]);
    }
    public function createFile($name,$localPath = null ){

        

        $drive = new Drive($this->client);
        $folderId = "1FILoaeYw2bEqAPBwq7J8j97pnEdhbdKk";

        $folderMetadata = new DriveFile([
            'name' => $name,
            'mimeType' => 'application/vnd.google-apps.folder',
            'parents' => [$folderId]
        ]);

        $folder = $drive->files->create($folderMetadata, [
            'fields' => 'id'
        ]);

        return response()->json(['folderId' => $folder->id]);

        
        
    }
}
