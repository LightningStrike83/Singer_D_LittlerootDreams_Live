<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SpeciesShinyMethod extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["id", "species", "shiny_method", "votes", "notes"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
