<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TypePerformance; // Add this line

class OscTypePerformance extends Model
{
    use HasFactory;

    protected $fillable = [
        'osc_id',
        'type_performance_id',
    ];
    public function osc()
    {
        //muitos para um
        return $this->belongsTo(Osc::class);
    }
    public function typePerformance()
    {
        //muitos para um
        return $this->belongsTo(TypePerformance::class);
    }
}
