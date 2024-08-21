<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Axis extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image',
        'description',
        'current_level_id'
    ];

    public function osc(){
        return $this->belongsToMany(Osc::class);
    }

    public function level(){
        return $this->hasMany(Level::class);
    }
   

}
