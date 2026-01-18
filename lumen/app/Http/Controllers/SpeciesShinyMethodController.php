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
        $speciesmethod = SpeciesShinyMethod::join('species_controllers', 'species_shiny_methods.species', '=', 'species_controllers.id')->join('game_shiny_methods', 'species_shiny_methods.shiny_method', '=', 'game_shiny_methods.id')->join('shiny_methods', 'game_shiny_methods.shiny_method', '=', 'shiny_methods.id')->join('games', 'game_shiny_methods.game', '=', 'games.id')->select('species_controllers.id', 'number', 'species_controllers.name as species_name', 'shiny_methods.name as shiny_method_name', 'description', 'instructions', 'odds_nocharm', 'odds_charm', 'species_shiny_methods.notes as species_notes', 'game_shiny_methods.notes as game_notes', 'votes', 'title', 'species_shiny_methods.id as key_id', 'games.id', 'games.id as game', 'method_type')->where('species_shiny_methods.species', $id)->orderBy('votes', 'desc')->get();
        return response()->json($speciesmethod);
    }

    public function getOne($id) {
        $vote = SpeciesShinyMethod::select('id', 'votes')->where('id', '=', $id)->get();
        return response()->json($vote);
    }

    public function increaseVote(Request $request, $id) {
        $method = SpeciesShinyMethod::findOrFail($id);
        $method->votes = $request->currentVotes;
        $method->save();

        return response()->json($method, 200);
    }
}

