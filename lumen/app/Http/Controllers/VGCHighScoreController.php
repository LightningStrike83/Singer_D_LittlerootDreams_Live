<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\VGCHighScore;


class VGCHighScoreController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function get100() {
        $score = VGCHighScore::select('id', 'name', 'score')->orderBy('score', 'desc')->limit(100)->get();
        return response()->json($score);
    }
}

