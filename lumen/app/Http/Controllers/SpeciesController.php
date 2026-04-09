<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Species;


class SpeciesController extends Species {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $species = Species::select('number', 'name')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getAllNoAlt() {
        $species = Species::select('number', 'name')->where('is_alt', '=', 'n')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getAllNoAltDex()
    {
        $species = Species::query()
            ->select(
                'species_controllers.number',
                'species_controllers.name',
                't1.type as type1',
                't2.type as type2',
                'species_controllers.id',
                'generation'
            )
            ->leftJoin('types as t1', 'species_controllers.type1', '=', 't1.id')
            ->leftJoin('types as t2', 'species_controllers.type2', '=', 't2.id')
            ->where('species_controllers.is_alt', '=', 'n')
            ->orderBy('species_controllers.id', 'asc')
            ->get();

        return response()->json($species);
    }

    public function getSWSH() {
        $species = Species::select('number', 'name')->where('in_SwSh', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getLA() {
        $species = Species::select('number', 'name')->where('in_LA', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getScarVio() {
        $species = Species::select('number', 'name')->where('in_ScarVio', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }
    
    public function getZA() {
        $species = Species::select('number', 'name')->where('in_ZA', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getRegionals() {
        $species = Species::select('number', 'name', 'id', 'generation')->where('is_regional', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getStarters() {
        $species = Species::select('number', 'name')->where('is_starter', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getLegendaries() {
        $species = Species::select('number', 'name')->where('is_legendary', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getAshPokes() {
        $species = Species::select('number', 'name')->where('ash_own', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getGifts() {
        $species = Species::select('number', 'name')->where('gift', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getChampion() {
        $species = Species::select('number', 'name')->where('champion', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getMegas() {
        $species = Species::select('number', 'name')->where('is_mega', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getGMax() {
        $species = Species::select('number', 'name')->where('is_gmax', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getDevFavs() {
        $species = Species::select('number', 'name')->where('dev_fav', '=', 'y')->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getGeneration($generation) {
        $species = Species::select('number', 'name')->where('generation', '=', $generation)->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getTypes($type) {
        $species = SpeciesController::from('species_controllers as sc1')  
                          ->join('types as t1', 'sc1.type1', '=', 't1.id')  // INNER JOIN for type1
                          ->leftJoin('types as t2', 'sc1.type2', '=', 't2.id')  // LEFT JOIN for type2
                          ->select('sc1.number', 'sc1.name')  
                          ->where('t1.type', '=', $type)  
                          ->orWhere(function ($query) use ($type) {
                              $query->where('t2.type', '=', $type)
                                    ->whereNotNull('t2.id');  // Only include relevant type2 entries
                          })
                          ->orderBy('sc1.number', 'asc')
                          ->get();
    
        return response()->json($species);
    }
    
    public function getConvert($id) {
        $species = Species::select('id', 'number', 'name')->where("pokeapi_number", "=", $id)->orderBy('number', 'asc')->get();
        return response()->json($species);
    }
    
    public function getOne($id) {
        $species = Species::select('id', 'number', 'name', 'in_ScarVio')->where("id", "=", $id)->orderBy('number', 'asc')->get();
        return response()->json($species);
    }

    public function getEvolved() {
        $species = Species::select('id', 'number', 'name', 'bst')->where("fully_evolved", "=", "y")->orderBy('number', 'asc')->get();
        return response()->json($species);
    }
}

