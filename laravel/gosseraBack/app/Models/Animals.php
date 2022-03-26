<?php

// php artisan make:model Flight --controller

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animals extends Model
{
    use HasFactory;

    // la taula associada al model Animals -- animals_protectora
    protected $table = 'animals_protectora';
}
