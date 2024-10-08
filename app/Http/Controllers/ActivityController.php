<?php

namespace App\Http\Controllers;

use App\Models\activity;
use App\Services\ChatGPT\OpenAi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Address;
use App\Services\Google\Drive\File;
use App\Models\GoogleDriveFolder;
use App\Models\GoogleToken;
use App\Services\Google\Drive\Folder;
 // Add this line to import the OpenAi class

class ActivityController extends Controller
{

    public function index(){
        //lista de atividades
        try{
            $activities = Auth::user()->osc->first()->activities()->orderBy('date','desc')->get();
            $isConnectedToGoogleDrive = GoogleToken::where('osc_id',Auth::user()->osc->first()->id)->first();
            return Inertia::render('VelaSocialLab/ActivityHub/ActivityHub',[
                'activities' => $activities,
                'isConnectedToGoogleDrive' => !empty($isConnectedToGoogleDrive)
            ]);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividades!']);
        }

    }
    public function rephraseDescription(Request $request){
        //reformular descrição da atividade
        try{
            $openAi = new OpenAi();
            $response = $openAi->chatGPT('Reformule o seguinte texto:',$request->description);
            return response()->json($response);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao reformular descrição!']);
        }
    }
    public function filterByDate($dateFrom,$dateTo){
        //detalhes da atividade
        try{
            if(!empty($dateFrom) && !empty($dateTo)){
                $activities = Auth::user()->osc->first()->activities();
                $activitiesFilterDate =$activities->whereBetween('date',[$dateFrom,$dateTo])->get();
                return response()->json(['status'=> 200,'activities' => $activitiesFilterDate]);
            }
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
                return redirect()->back()->with(['status'=> 200,'activities' => $activitiesFilter]);
            }
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividades!']);
        }


    }

    public function store(Request $request){


        $request->validate([
            'activityTitle' => 'required',
            'activityDescription' => 'required',
            'activityDate'=> 'required|date',
            'activityHourStart' => 'required|date_format:H:i|before:activityHourEnd',
            'activityHourEnd' => 'required|date_format:H:i|after:activityHourStart',
            //'activityThumbnail' => 'required'|'url',
        ]);
      //  try{

            $osc = Auth::user()->osc->first();

            $fileDrive = new File($osc->id);
            $folder = new Folder($osc->id);

            $googleDriveFolder =GoogleDriveFolder::where('name','Atividades')->where('osc_id',$osc->id)->first();
            
            if(!empty($googleDriveFolder)){

                $folderActivity = $folder->create($request->activityDate.'('.$request->activityTitle.')',$googleDriveFolder->folder_id);
                $fileCreated = $fileDrive->create('thumbnail-'.uniqid(),$request->file('activityThumbnail'),$folderActivity->id,true);
                if($fileCreated){
                    $webViewLink = $fileCreated['webViewLink'];
                    if(!empty($request->file('activityImages'))){
                    foreach($request->file('activityImages') as $fileDatabase){
                        $driveFile = new File($osc->id);
                        $file = $driveFile->create(uniqid(),$fileDatabase,$folderActivity->id,true);
                        }
                        $folderActivityId = GoogleDriveFolder::where('folder_id',$folderActivity->id)->first();
                        !empty($folderActivityId) ? $folderActivityId = $folderActivityId->id : $folderActivityId = null; 
                        
                        Activity::create([
                            'title' => $request->activityTitle,
                            'description' => $request->activityDescription,
                            'date' => $request->activityDate,
                            'hour_start' => $request->activityHourStart,
                            'hour_end' => $request->activityHourEnd,
                            'status' => $request->activityStatus,
                            'audience' => $request->activityAudience,
                            'thumbnail_photos_url' => $webViewLink,
                            'folder_photos_id' => $folderActivityId,
                            'send_by' => Auth::user()->name,
                            'user_id' => Auth::user()->id,
                            'osc_id' => Auth::user()->osc->first()->id
                        ]);
                    }

                }

         
            }
            else{
                return response()->json(['status'=> 500,'message' => 'Pasta de atividades não encontrada! Pasta Velaae foi Alterada!!']);
            }
            
            return redirect()->back()->with(['status'=> 200,'message' => 'Atividade cadastrada com sucesso!']);
/*
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao cadastrar atividade!']);
        }
*/
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
                'thumbnail_photos_url' => $request->activityThumbnailPhotosUrl,
                'folder_photos_id' => 1//$request->activityPhotosUrl,
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
