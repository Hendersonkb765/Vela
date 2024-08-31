<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskOrder extends Model
{
    use HasFactory;

    protected $fillable = ['order', 'task_id'];

    public function task(){
        return $this->belongsTo(Task::class);
    }
}
