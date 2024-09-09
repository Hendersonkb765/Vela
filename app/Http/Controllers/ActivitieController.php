<?php

namespace App\Http\Controllers;

use App\Models\Activitie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivitieController extends Controller
{
    
    public function index(){
        //lista de atividades
    
        return view('activitie.index');
    }
    public function create(){
        //formulario de cadastro de atividades
        return view('activitie.create'); 
    }
    public function store(Request $request){

        try{
            Auth::loginUsingId(14);
            Activitie::create([
                'title' => $request->title,
                'description' => $request->description,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'status' => $request->status,
                'user_id' => Auth::user()->id,
                'osc_id' => Auth::user()->osc->first()->id
            ]);
    
            return response()->json(['status'=> 200,'message' => 'Atividade cadastrada com sucesso!']);
           
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao cadastrar atividade!']);
        }
       

    }
    public function update(){

    }
    public function destroy(){

    }
}
