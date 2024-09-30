<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Step extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'position',
    ];

    public function task(){
        return $this->belongsTo(Task::class);
    }

    public function dependence(){
        return $this->hasMany(Dependence::class);
    }
    public function requirement(){
        return $this->belongsToMany(Requirement::class);
    }
    public function osc(){
        return $this->belongsToMany(Osc::class)->withPivot('status');
    }
}
