<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
class Cnae extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
    ];

    // Relacionamento muitos para muitos
  

}


