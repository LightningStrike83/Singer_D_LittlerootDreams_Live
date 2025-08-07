<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Move;


class MoveController extends Controller {
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     public function getAll() {
        $move = Move::select('id', 'move')->orderBy('move', 'asc')->get();
        return response()->json($move);
    }

    public function getSVMoves() {
        $move = Move::select('id', 'move')->where('in_SV', "<>", "n")->orderBy('move', 'asc')->get();
        return response()->json($move);
    }
}

