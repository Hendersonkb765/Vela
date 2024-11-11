<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'hour_start',
        'hour_end',
        'date',
        'audience',
        'send_by',
        'description',
        'thumbnail_photo_url',
        'send_by_id',
        'osc_id'
    ];

    // muitos para um
    public function osc(): BelongsTo
    {
        return $this->belongsTo(Osc::class);
    }
    public function address(){
        return $this->morphMany(Address::class, 'addressable');
    }
    public function photos(){
        return $this->hasMany(PhotoActivity::class);
    }
  
}
