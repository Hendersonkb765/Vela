<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\GoogleDriveFile;

class GoogleDriveFolder extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'name',
        'folder_id',
        'osc_id',
        'creation_folder_date',
    ];

    public function fileDrive(){
        return $this->hasMany(GoogleDriveFile::class,'folder_id');
    }
}
