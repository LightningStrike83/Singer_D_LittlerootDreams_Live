<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SpeciesAbility;


class SpeciesAbilityController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getOne($id) {
        $speciesability = SpeciesAbility::join('species_controllers', 'species_abilities.species', '=', 'species_controllers.id')->join('abilities', 'species_abilities.ability', '=', 'abilities.id')->select('species_controllers.id', 'number', 'name', 'abilities.ability')->where("species_abilities.ability", "=", $id)->orderBy('number', 'asc')->get();
        return response()->json($speciesability);
    }
}

