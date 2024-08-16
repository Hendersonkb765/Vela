<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany; // Add this line
class Osc extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'cnpj',
        'institutional_email',
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
    
  
  // Relacionamento um para muitos
    public function OscTypePerformance() : HasMany 
    {
        return $this->hasMany(OscTypePerformance::class);
    }
    public function Address() : HasMany 
    {
        return $this->hasMany(Address::class);
    }
    public function activitie(): HasMany
    {
        return $this->hasMany(Activitie::class);
    }
    public function phoneNumber() : HasMany 
    {
        return $this->hasMany(PhoneNumber::class);
    }

    // Relacionamento muitos para muitos
    public function cnae(): BelongsToMany
    {
        return $this->belongsToMany(Cnae::class);
    }
    public function user(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
    public function targetAudience(): BelongsToMany
    {
        return $this->belongsToMany(TargetAudience::class);
    }
    public function typePerformance(): BelongsToMany
    {
        return $this->belongsToMany(TypePerformance::class);
    }
    
}


