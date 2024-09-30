<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Dependence extends Model
{
    use HasFactory;

   public function step(): BelongsTo
    {
        return $this->belongsTo(Step::class);
    }

    public function task(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }
}

