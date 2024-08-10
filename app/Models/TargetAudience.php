<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TargetAudience extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
    ];

    public function oscTargetAudience()
    {
        // um para muitos
        return $this->hasMany(OscTargetAudience::class);
    }
}
