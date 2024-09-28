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

        
        $request->validate([
            'activityTitle' => 'required',
            'activityDescription' => 'required',
            'activityDate'=> 'required|date',
            'activityHourStart' => 'required|date_format:H:i|before:activityHourEnd',
            'activityHourEnd' => 'required|date_format:H:i|after:activityHourStart',
            //'hour_start' => 'required|date_format:H:i|before:hour_end',
            //'hour_end' => 'required|date_format:H:i|after:hour_start',
        ]);
        try{
            
            $activity =Activity::create([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => '00:00', 
                'hour_end' => '00:00',
                'status' => $request->activityStatus,
                'audience' => 333,
                'img_url' => 'https://via.placeholder.com/150',
                'thumbnail_photos_url' => 'https://via.placeholder.com/150',
                'photos_url' => 'https://via.placeholder.com/150',
                'send_by' => Auth::user()->name,
                'user_id' => Auth::user()->id,
                'osc_id' => Auth::user()->osc->first()->id
            ]);
            return response()->json(['status'=> 200,'message' => 'Atividade cadastrada com sucesso!']);
           
        }
        catch(\Exception $e){
            dd($e);
            return response()->json(['status'=> 500,'message' => 'Erro ao cadastrar atividade!']);
        }
       

    }
    public function update(){

    }
    public function destroy(){

    }
}
