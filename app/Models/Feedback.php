<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;

    protected $fillable = [
        'message',
        'rating',
    ];

    public function teamVela()
    {
        return $this->belongsTo(User::class);
    }
    public function requirement()
    {
        return $this->belongsTo(Requirement::class);
    }
    public function answer(){
        return $this->morphMany(Answer::class,'answerable');
    }
}
