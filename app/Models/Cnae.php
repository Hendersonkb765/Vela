<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Cnae extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
    ];
    public function osc_cnaes(): HasMany
    {
        return $this->hasMany(OscCnae::class);
    }

}


