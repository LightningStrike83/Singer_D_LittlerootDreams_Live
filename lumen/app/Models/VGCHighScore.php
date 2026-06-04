<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VGCHighScore extends Model
{
     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ["id", "name", "score"];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}
