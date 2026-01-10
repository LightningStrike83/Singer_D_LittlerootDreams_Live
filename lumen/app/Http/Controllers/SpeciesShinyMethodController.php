<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\SpeciesShinyMethod;


class SpeciesShinyMethodController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getMethods($id) {
        $speciesmethod = SpeciesShinyMethod::join('species_controllers', 'species_shiny_methods.species', '=', 'species_controllers.id')->join('game_shiny_methods', 'species_shiny_methods.shiny_method', '=', 'game_shiny_methods.id')->join('shiny_methods', 'game_shiny_methods.id', '=', 'shiny_methods.id')->select('species_controllers.id', 'number', 'species_controllers.name as species_name', 'shiny_methods.name as shiny_method_name', 'description', 'instructions', 'odds_nocharm', 'odds_charm', 'species_shiny_methods.notes', 'game_shiny_methods.notes', 'votes')->where('species_shiny_methods.species', $id)->get();
        return response()->json($speciesmethod);
    }
}

