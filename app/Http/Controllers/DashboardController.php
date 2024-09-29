<?php

namespace App\Http\Controllers;

use App\Models\Axis;
use App\Models\AxisOsc;
use App\Models\Level;
use Illuminate\Http\Request;
use App\Models\Osc;
use App\Models\Task;
use App\Models\TaskOrder;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB; // Add this line
use Inertia\Inertia;
use App\Services\Google\Drive\GoogleDrive; // Add this line

class DashboardController extends Controller
{
    //

    public function index(){
       try{
        $user = Auth::user();
        $osc = $user->osc->first();
        $axis = $osc->axis->first();
       
        //dd("DEU CERTO BLZ! SO NÃO FOI CRIADA A PAGINA DE DASHBOARD AINDA");
     
        $currentLevel = $osc->axis->first()->pivot->current_level;
        $level = $axis->level->where('position',$currentLevel)->first();
        $tasks = $level->task;
        //$tasks = $axis->level->first()->with(['task','task.step'])->where('position', $level->id)->first();
        $arrayTasks = ['axis'=>$axis->name,'completed'=>['total'=>0],'pending'=>['total'=>0],'tasksMax'=>0,'requirementsFailed'=>0];

        foreach ($tasks as $task) {

            $numberPeding = 0;
            $numberCompleted = 0;
            $step = [];
           
            $taskNew = ['id'=> $task->id,'title'=>$task->title,'status'=>$task->osc->first()->pivot->status,'step'=>[],'order_number'=>$task->order->order_number];
           
            foreach ($task->step as $step) {
                
                foreach ($step->requirement as $requirement) {
                    if ($requirement->status == 'reprovado'){
                        $arrayTasks['requirementsFailed']++;
                    }
                }

                if($step->status == 'completed'){
                    $numberCompleted++;
                }else{
                    $numberPeding++;
                }
                $step = ['id'=>$step->id,'title'=>$step->title,'pending'=>0,'completed'=>0];
            }
            $step['pending'] = $numberPeding;
            $step['completed'] = $numberCompleted; 
            $taskNew['step'] = $step;
            $task->osc->first()->pivot->status == 'concluído'?
            array_push($arrayTasks['completed'],$taskNew):
            array_push($arrayTasks['pending'],$taskNew);
        }   

        //array_push($arrayTasks['completed'],['total'=> Level::where('id',$currentLevel)->first()->task->where('status','completed')->count()]);
        
        foreach($level->task as $task){
            $task->osc->first()->pivot->status == 'concluído'?
            $arrayTasks['completed']['total']++:
            $arrayTasks['pending']['total']++;
        }
        
        //$arrayTasks['completed']['total'] = Level::where('id',$currentLevel)->first()->task->where('status','completed')->count();
        //$arrayTasks['pending']['total'] = Level::where('id',$currentLevel)->first()->task->where('status','pending')->count();
        $arrayTasks['tasksCompleted'] =$osc->task(); //$level->task->taskPending()->count();//Level::where('id',$currentLevel)->first()->task->where('status','completed')->count();
        $arrayTasks['tasksMax'] = $level->task->count(); //Level::where('id',$currentLevel)->first()->task->count();

        //$googleDrive = new GoogleDrive($osc->id);
        
        return Inertia::render('Dashboard',[
            'user' =>[
                        'id'=> $user->id,
                        'name'=>$user->name,
                        'email' => $user->email,
                        'profilePicture' => $user->image_url,
                        'roleInOrganization' => $user->role->name,
                    ],
            'osc' => [
                        'id'=> $osc->id,
                        'fantasyName'=>$osc->fantasy_name,
                        'imageUrl' => $osc->image_url,
                    ],
            'level' => [
                        'maxLevel'=>$axis->level->count(),
                        'currentLevel'=>$currentLevel,
                    ],
            'tasks' => $arrayTasks,
            //'storageDrive'=> $googleDrive->getUserStorageQuota(), 
        ]);
       }
       catch(\Exception $e){
           return dd($e);
       }


    }
}
