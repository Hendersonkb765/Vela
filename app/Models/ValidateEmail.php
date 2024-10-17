<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValidateEmail extends Model
{
    use HasFactory;

    protected $fillable =[
        'email',
        'token',
        'user_id'
       
    ];
}
