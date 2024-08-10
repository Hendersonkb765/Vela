<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OscTargetAudience extends Model
{
    use HasFactory;

    protected $fillable = [
        'osc_id',
        'target_audience_id',
    ];
    public function osc()
    {
        //muitos para um
        return $this->belongsTo(Osc::class);
    }
    public function targetAudience()
    {
        //muitos para um
        return $this->belongsTo(TargetAudience::class);
    }
}
