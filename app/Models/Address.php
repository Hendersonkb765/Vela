<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $fillable = [
        'cep',
        'street',
        'number',
        'complement',
        'neighborhood',
        'city',
        'state',
        'osc_id'
    ];
    public function osc()
    {
        //muitos para um
        return $this->belongsTo(Osc::class);
    }
}
