<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Step;
class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'message_conclusion',
    ];

    public function level(){
        return $this->belongsTo(Level::class);
    }
    public function step(){
        return $this->hasMany(Step::class);
    }
    public function depencence(){
        return $this->hasMany(Dependence::class);
    }
    public function order(){
        return $this->hasOne(TaskOrder::class);
    }
    
}
