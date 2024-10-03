<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
