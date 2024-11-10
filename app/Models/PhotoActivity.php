<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhotoActivity extends Model
{
    protected $fillable = [
        'photo_url',
        'activity_id',
    ];
}
