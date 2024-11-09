<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserQuestionController extends Controller
{
    //

    public function store(Request $request){
        try {
            $data = request()->validate([
                'title' => 'required',
                'description' => 'required',
            ]);
            
            UserQuestion::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'user_id' => auth()->user()->id,
                'user_name' => auth()->user()->name,
                'osc_name' => auth()->user()->osc->name
            ]);
            
            return response()->json([
                'status' => 200,
                'message' => 'Duvida criada com sucesso'
            ]);

        } catch(Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Erro ao criar duvida'
            ]);
        }
    }
   
    
    
    
}
