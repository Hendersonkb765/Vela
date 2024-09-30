<?php

namespace App\Services\Google\Drive;

use Carbon\Carbon;
use App\Models\Axis;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Google\Service\Drive\DriveFile;
use Google\Service\Drive;
use App\Models\Level;
use App\Models\GoogleDriveFolder;
class Folder extends GoogleDrive
{

    public function viewAllFiles() {
        $drive = new Drive($this->client);
        $files = $drive->files->listFiles([
            'q' => "'root' in parents",
            'fields' => 'files(id, name)'
        ]);

        foreach ($files->files as $file) {
            echo $file->name . '<br>';
        }


    }


    public function createDefaultDirectories(){
        try{
            
            $velaFolder = $this->create('Velaae_Social_lab',null);      
            $this->create('Atividades', $velaFolder->id);
         
            $axesFolder = $this->create('Eixos', $velaFolder->id);
          
            $axes=Axis::all();
            
            foreach($axes as $axis){
                $levels = $axis->level;
    
                $axisFolder = $this->create($axis->name,$axesFolder->id);
              
                foreach($levels as $level){
                    $levelFolder = $this->create($level->name,$axisFolder->id);
                   
                }
            }
            return response()->json(['message' => 'Pastas criadas com sucesso']);
        }
        catch(\Exception $e){
            return response()->json(['error' => 'Ocorreu algum erro ao criar as pastas']);
        }
        
        
    }
    public function create(string $name,string $parentFolderId = null){ 
        try{
            $drive = new Drive($this->client);
            $folderMetadata = new DriveFile([
                'name' => $name,
                'mimeType' => 'application/vnd.google-apps.folder',
                'parents' => [$parentFolderId],
            ]);
        
            $folder = $drive->files->create($folderMetadata, [
                'fields' => 'id,createdTime,name'
            ]);
            GoogleDriveFolder::create([
                'name' => $folder->name,
                'folder_id' => $folder->id,
                'osc_id' => $this->oscId,
                'folder_type'=>'level',
                'creation_folder_date' => Carbon::parse($folder->createdTime)->format('Y-m-d H:i:s')
            ]);
          
            return $folder;
        }
        catch(\Exception $e){
            return response()->json(['error' => 'Ocorreu algum erro ao criar a pasta']);
        }

        return $folder;
    }
    public function deleteFolder(string $folderId){
        try{
            $drive = new Drive($this->client);
            $drive->files->delete($folderId);
            //deletar do banco de dados
            GoogleDriveFolder::where('folder_id',$folderId)->delete();
            
            return response()->json(['message' => 'Pasta deletada com sucesso']);
        }
        catch(\Exception $e){
            return response()->json(['error' => 'Ocorreu algum erro ao deletar a pasta']);
        }
        
    }


  
}

