<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Builder; // Add this line

class Osc extends Model
{
    use HasFactory;

    protected $fillable = [
        'cnpj',
        'institutional_email',
        'company_name',
        'fantasy_name',
        'presidents_name',
        'foundation_date',
        'banner_url',
        'image_url',
        'legal_nature',
        'statute_url',
        'cnae_main',
    ];
    
// Escopos

  // Relacionamento um para muitos
  

    
    public function address(){
        return $this->morphMany(Address::class,'addressable');
    }
    

    public function axis()
    {
        return $this->belongsToMany(Axis::class)->withPivot('current_level');
    }
    public function level()
    {
        return $this->belongsToMany(Level::class);
    }
    // Relacionamento muitos para muitos
    public function cnae()
    {
        return $this->belongsToMany(Cnae::class);
    }
    public function user()
    {
        return $this->belongsToMany(User::class);
    }
    public function targetAudience()
    {
        return $this->belongsToMany(TargetAudience::class);
    }
    public function typePerformance()
    {
        return $this->belongsToMany(TypePerformance::class);
    }
    
    public function task(){
        return $this->belongsToMany(Task::class)->withPivot('status');
    }
    
    public function phone(){
        return $this->morphMany(Phone::class,'phoneable');
    }
    public function recurring_activity(){
        return $this->hasMany(RecurringActivity::class);
    }
    public function activitie(){
        return $this->hasMany(Activitie::class);
    }
    public function driveFolder(){
        return $this->hasMany(DriveFolder::class);
    }

  
    
    
}


