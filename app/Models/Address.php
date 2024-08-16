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
        'counties',
        'number',
        'complement',
        'neighborhood',
        'state',
        'osc_id'
    ];

    // Relacionamento muitos para um
    public function osc()
    {
        return $this->belongsTo(Osc::class);
    }
}
