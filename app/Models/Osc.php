<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany; // Add this line

class Osc extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'CNPJ',
        'institutional_email',
        'phone_number',
        'company_name',
        'fantasy_name',
        'presidents_name',
        'foundation_date',
        'banner_url',
        'img_url',
        'legal_nature',
        'statute_url',
        'cnae_main',
        'user_id',
    ];
    
    public function OscCnae() : HasMany 
    {
        return $this->hasMany(OscCnae::class);
    }
    public function OscTargetAudience() : HasMany 
    {
        return $this->hasMany(OscTargetAudience::class);
    }
    public function OscTypePerformance() : HasMany 
    {
        return $this->hasMany(OscTypePerformance::class);
    }
    public function Address() : HasMany 
    {
        return $this->hasMany(Address::class);
    }
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}


