<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoogleDriveFile extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $fillable = [
        'name',
        'file_id',
        'folder_id',
        'creation_file_date',
        'modification_file_date',
        'file_extension',
        'web_content_link',
        'web_view_link'
    ];

    public function folderDrive(){
        return $this->belongsTo(GoogleDriveFolder::class);
    }
}
