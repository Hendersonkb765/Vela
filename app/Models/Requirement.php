<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requirement extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'folder_url',
        'type',
        'status',

    ];

    public function step(){
        return $this->belongsToMany(Step::class);
    }

    
}
