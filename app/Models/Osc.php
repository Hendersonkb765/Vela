<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Osc extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'presidents_name',
        'foundation_date',
        'banner_url',
        'img_url',
        'user_id',
    ];
}


