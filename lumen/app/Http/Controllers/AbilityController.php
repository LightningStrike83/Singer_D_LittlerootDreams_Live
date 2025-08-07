<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ability;


class AbilityController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $ability = Ability::select('id', 'ability')->orderBy('ability', 'asc')->get();
        return response()->json($ability);
    }
}

