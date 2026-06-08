<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\vgcHighScore;


class vgcHighScoreController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function get100() {
        $score = vgcHighScore::select('id', 'name', 'score')->orderBy('score', 'desc')->limit(100)->get();
        return response()->json($score);
    }

    public function saveScore(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'score' => 'required',
        ]);
        $score = vgcHighScore::create($request->all());
        return response()->json($score, 201);
    }
}

