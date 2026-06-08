<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class vgcHighScore extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["name", "score"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
