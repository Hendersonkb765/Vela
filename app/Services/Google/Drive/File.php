<?php
namespace App\Services\Google\Drive;
use App\Models\GoogleDriveFile;
use App\Models\GoogleDriveFolder;
use Carbon\Carbon;
use Google\Service\Drive;
use Google\Service\Drive\DriveFile;


class File extends GoogleDrive
{

    public function create(string $name,$fileDatabase, string $folderId, bool $isPublic = false)
    {
  
       // try{
            $dataBasefolderId = GoogleDriveFolder::where('folder_id',$folderId)->first()->id;
            if(!$folderId){
                return response()->json(['error'=>"Pasta não encontrada"],404);
            }
            else{
                $file = $fileDatabase;
        
                if($fileDatabase){
                    $drive = new Drive($this->client);
                    $fileMetadata = new DriveFile([
                        'name' => $name,
                        'mimeType' => $fileDatabase->getMimeType(),
                        'parents' => [$folderId]
                    ]);
                    $content = file_get_contents($fileDatabase);
    
                    $file = $drive->files->create($fileMetadata, [
                        'data' => $content,
                        'mimeType' => $fileDatabase->getMimeType(),
                        'uploadType' => 'multipart',
                        'fields' => 'id,createdTime,name,modifiedTime,webContentLink'
                    ]);
                    if($isPublic){
                        $permission = new \Google\Service\Drive\Permission();
                        $permission->type = 'anyone';
                        $permission->role = 'reader';
                        $drive->permissions->create($file->id, $permission);
                    }
                   
                    
                    
                    $webViewLink = 'https://drive.google.com/thumbnail?id='.$file->id.'&sz=w1000';
                    GoogleDriveFile::create([
                        'name' => $name,
                        'file_id' => $file->id,
                        'folder_id' => $dataBasefolderId,
                        'creation_file_date' => Carbon::parse($file->createdTime)->format('Y-m-d H:i:s'),
                        'modification_file_date' => Carbon::parse($file->modifiedTime)->format('Y-m-d H:i:s'),
                        'file_extension' => $fileDatabase->getClientOriginalExtension(),
                        'web_content_link' => $file->webContentLink,
                        'web_view_link' => $webViewLink
                    ]);
    
                    return $file;  
            }
            

            }
/*
        }
        catch(\Exception $e){
            return response()->json(['error'=>"Erro ao criar arquivo no Google Drive"],500);
        }
        */
        
    }
    public function delete(string $fileId)
    {
        try{
            $drive = new Drive($this->client);
            $drive->files->delete($fileId);
            GoogleDriveFile::where('file_id',$fileId)->delete();
        }
        catch(\Exception $e){
            return response()->json(['error'=>"Erro ao deletar arquivo no Google Drive"],500);
        }
    }

   
    public function update(string $fileId, $fileDatabase){
        try{
            $drive = new Drive($this->client);
        $fileMetadata = new DriveFile([
            'name' => $fileDatabase->getClientOriginalName(),
            'mimeType' => $fileDatabase->getMimeType(),
        ]);
        $content = file_get_contents($fileDatabase->getRealPath());

        $updatedFile = $drive->files->update($fileId, $fileMetadata, [
            'data' => $content,
            'mimeType' => $fileDatabase->getMimeType(),
            'uploadType' => 'multipart',
            'fields' => 'id,createdTime,name,modifiedTime'
        ]);
       
        GoogleDriveFile::where('file_id',$fileId)->update([
                'modification_file_date' => Carbon::parse($updatedFile->modifiedTime)->format('Y-m-d H:i:s')
        ]);
            
        return $updatedFile;  

        }
        catch(\Exception $e){
            return response()->json(['error'=>"Erro ao atualizar arquivo no Google Drive"],500);
        }
    }
    
}