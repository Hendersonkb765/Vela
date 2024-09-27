<?php

namespace App\Http\Controllers;

use App\Models\activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ActivityController extends Controller
{
    
    public function index(){
        //lista de atividades
        $activities = Auth::user()->osc->first()->activities;
        return Inertia::render('VelaSocialLab/TaskHub/TaskHub',[
            'activities' => $activities
        ]);   
    }
    public function create(){
        //formulario de cadastro de atividades
        
    }
    public function store(Request $request){

        dd($request);
        $request->validate([
            'activityTitle' => 'required',
            'activityDescription' => 'required',
            'activityDate'=> 'required|date',
            //'hour_start' => 'required|date_format:H:i|before:hour_end',
            //'hour_end' => 'required|date_format:H:i|after:hour_start',
        ]);
        try{
            
            Activity::create([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'start_date' => $request->activityDate,
                'end_date' => '2021-10-10',
                'status' => $request->activityStatus,
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
