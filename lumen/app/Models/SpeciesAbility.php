<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpeciesAbility extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["id", "species", "ability"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
