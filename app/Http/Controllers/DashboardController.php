<?php

namespace App\Http\Controllers;

use App\Models\Axis;
use App\Models\AxisOsc;
use App\Models\Level;
use Illuminate\Http\Request;
use App\Models\Osc;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB; // Add this line
use Inertia\Inertia;

class DashboardController extends Controller
{
    //

    public function index(){
       try{
        
        $user = Auth::user();
        $osc = $user->osc->first();
        $axis = $osc->axis->first();
        dd("DEU CERTO BLZ! SO NÃO FOI CRIADA A PAGINA DE DASHBOARD AINDA");
        $level = $axis->level->where('id',$axis->current_level_id)->first();
        $tasks = Level::with(['task' => function($query){
            $query->where('status','pending');
        },'task.step'])->where('id', $level->id)->first();
        $arrayTasks = ['axis'=>$axis->name];

        foreach ($tasks['task'] as $task) {
            $peding = 0;
            $completed = 0;
            $step = [];
            $taskNew = ['id'=> $task->id,'title'=>$task->title,'status'=>$task->status,'step'=>[]];
            foreach ($task['step'] as $step) {
                if($step->status == 'completed'){
                    $completed++;
                }else{
                    $peding++;
                }
                $step = ['id'=>$step->id,'title'=>$step->title,'pending'=>0,'completed'=>0];
            }
            $step['pending'] = $peding;
            $step['completed'] = $completed;
            $taskNew['step'] = $step;
            array_push($arrayTasks,$taskNew);

        }

        return Inertia::render('Dashboard',[
            'user' => $user,
            'osc' => [
                        'id'=> $osc->id,
                        'fantasy_name'=>$osc->fantasy_name,
                        'img_url' => $osc->img_url,
                    ],
            'level' => [
                        'max_level'=>$axis->level->count(),
                        'current_level'=>$level->position,
                    ],
            'task' => $arrayTasks,
        ]);
       }
       catch(\Exception $e){
           return $e->getMessage();
       }


    }
}
