<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OscCnae extends Model
{
    use HasFactory;

    protected $fillable = [
        'osc_id',
        'cnae_id',
    ];
   // Cada instância de OscCnae pertence a uma Osc e a um Cnae
    function osc():BelongsTo
    {
        return $this->belongsTo(Osc::class);
    }

    // Cada instância de OscCnae pertence a uma Osc e a um Cnae
    function cnae():BelongsTo
    {
        return $this->belongsTo(Cnae::class);
    }
}
