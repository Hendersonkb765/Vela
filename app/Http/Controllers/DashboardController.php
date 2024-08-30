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
        //dd("DEU CERTO BLZ! SO NÃO FOI CRIADA A PAGINA DE DASHBOARD AINDA");
        $currentLevel = DB::table('axis_osc')->where('osc_id',$osc->id)->where('axis_id',$axis->id)->first()->id;
        $level = $axis->level->where('id',$currentLevel)->first();
        $tasks = Level::with(['task','task.step'])->where('id', $level->id)->first();
        $arrayTasks = ['axis'=>$axis->name,'completed'=>['total'=>0],'pending'=>['total'=>0],'tasks_max'=>0,'requirements_failed'=>0];

        foreach ($tasks['task'] as $task) {
            $peding = 0;
            $completed = 0;
            $step = [];
            
            $taskNew = ['id'=> $task->id,'title'=>$task->title,'status'=>$task->status,'step'=>[],''];
            foreach ($task['step'] as $step) {

                foreach ($step->requirement as $requirement) {
                    if ($requirement->status == 'reprovado'){
                        $arrayTasks['requirements_failed']++;
                    }
                }
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
            $task->status == 'completed'?
            array_push($arrayTasks['completed'],$taskNew):
            array_push($arrayTasks['pending'],$taskNew);

        }
        //array_push($arrayTasks['completed'],['total'=> Level::where('id',$currentLevel)->first()->task->where('status','completed')->count()]);
        $arrayTasks['completed']['total'] = Level::where('id',$currentLevel)->first()->task->where('status','completed')->count();
        $arrayTasks['pending']['total'] = Level::where('id',$currentLevel)->first()->task->where('status','pending')->count();
        $arrayTasks['tasks_completed'] = Level::where('id',$currentLevel)->first()->task->where('status','completed')->count();
        $arrayTasks['tasks_max'] = Level::where('id',$currentLevel)->first()->task->count();

        $requirements = $tasks;
        //dd($requirements);
        //dd($arrayTasks);
        return Inertia::render('Dashboard',[
            'user' => $user,
            'osc' => [
                        'id'=> $osc->id,
                        'fantasy_name'=>$osc->fantasy_name,
                        'img_url' => $osc->img_url,
                    ],
            'level' => [
                        'max_level'=>$axis->level->count(),
                        'current_level'=>$currentLevel,
                    ],
            'tasks' => $arrayTasks,
        ]);
       }
       catch(\Exception $e){
           return $e->getMessage();
       }


    }
}
