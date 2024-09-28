<?php

namespace App\Http\Controllers;

use App\Models\activity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Address;

class ActivityController extends Controller
{
    
    public function index(){
        //lista de atividades
        try{
            $activities = Auth::user()->osc->first()->activities;
    
            return Inertia::render('VelaSocialLab/TaskHub/TaskHub',[
                'activities' => $activities
            ]);   
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividades!']);
        }
        
    }
    public function filterByName($title){
        //detalhes da atividade
       
        try{
            if(!empty($title)){
        
                $activities = Auth::user()->osc->first()->activities();
                $activitiesFilter =$activities->where('title','like',$title . '%')->get();
                return response()->json(['status'=> 200,'activities' => $activitiesFilter]);
            }
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividades!']);
        }
       
        
    }
    public function edit($Id){
      
        
    }
    public function store(Request $request){

        
        $request->validate([
            'activityTitle' => 'required',
            'activityDescription' => 'required',
            'activityDate'=> 'required|date',
            'activityHourStart' => 'required|date_format:H:i|before:activityHourEnd',
            'activityHourEnd' => 'required|date_format:H:i|after:activityHourStart',
            'activityThumbnailPhotosUrl' => 'required'|'url',
            'activityPhotosUrl' => 'required'|'url',
         
        ]);
        try{
            
            $activity =Activity::create([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => $request->activityHourStart, 
                'hour_end' => $request->activityHourEnd,
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
    public function update(Request $request,$id){
        try{
            $activity = Activity::find($id);
            $activity->update([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => $request->activityHourStart, 
                'hour_end' => $request->activityHourEnd,
                'status' => $request->activityStatus,
                'audience' => $request->activityAudience,
                'img_url' => 'https://via.placeholder.com/150',
                'thumbnail_photos_url' => $request->activityThumbnailPhotosUrl,
                'photos_url' => $request->activityPhotosUrl,
            ]);
            return response()->json(['status'=> 200,'message' => 'Atividade atualizada com sucesso!']);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao atualizar atividade!']);
        }
    }
    public function destroy($id){
        try{
            $activity = Activity::find($id);
            $activity->delete();
            return response()->json(['status'=> 200,'message' => 'Atividade deletada com sucesso!']);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao deletar atividade!']);
        }
    }
}