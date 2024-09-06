<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecurringActivity extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'hour_start',
        'hour_end',
        'type_recurrence',
        'description',
        'estimated_audience',
        'send_by',
        'pich_url',
        'photo-url',
        'thumbnail_photos_url',
    ];

    function osc(){
        return $this->belongsTo(Osc::class);
    }
    function address(){
        return $this->morphMany(Address::class,'addressable');
    }
    function dayWeek(){
        return $this->belongsToMany(DayWeek::class);
    }
}
