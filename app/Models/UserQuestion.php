<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserQuestion extends Model
{
    protected $fillable = [
        'title',
        'description',
        'user_id',
        'user_name',
        'osc_name'
        ];
    
}
