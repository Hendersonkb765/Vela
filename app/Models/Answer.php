<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $fillable = [
            'message',
            
    ];

    public function author()
    {
        return $this->belongsTo(User::class);
    }
    public function feedback()
    {
        return $this->belongsTo(Feedback::class);
    }

}
