<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PhoneNumber extends Model
{
    use HasFactory;

    protected $fillable= [
        'number',
         'osc_id'
        ];

    public function osc(){
        return $this->belongsTo(Osc::class);
    }
}
