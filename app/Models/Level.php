<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'image',
        'position',
    ];

    public function task(){
        return $this->hasMany(Task::class);
    }

    public function osc(){
         return $this->belongsToMany(Osc::class);
     }
    public function axis(){
        return $this->belongsTo(Axis::class);
    }
}
