<?php

namespace App\Http\Controllers;

use App\Models\activity;
use App\Services\ChatGPT\OpenAI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Address;
use App\Services\Google\Drive\File;
use App\Models\GoogleDriveFolder;
use App\Models\GoogleToken;
use App\Services\Google\Drive\Folder;
use Google\Service\YouTube\Thumbnail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
 // Add this line to import the OpenAi class

class ActivityController extends Controller
{

    public function index(){
        //lista de atividades
        // $activities = Auth::user()->osc->first()->activities()->get();
        // dd($activities->with(['google_drive_folders','google_drive_folders']));
        $activities = Auth::user()->osc->first()->activities()->with(['folderDrive.fileDrive'])->orderBy('date','desc')->get();
            $activitiesArray = $activities->toArray();
         
        try{
            $activities = Auth::user()->osc->first()->activities()->with(['folderDrive.fileDrive'])->orderBy('date','desc')->get();
            $activitiesArray = $activities->toArray();
         
          
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
            $openAi = new OpenAI();
            $response = $openAi->chatGPT('Reformule o seguinte texto, levando em conta o objetivo de registrar a atividade que a OSC teve no dia. Tenha como base o seguinte texto (Caso o texto esteja vazio, retorne a seguinte frase "Porfavor escreva algo."):',$request->description);
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

    public function filter(Request $request){
        //detalhes da atividade
        $activities = Auth::user()->osc->first()->activities();

        try{
            if (!empty($request->title) && !empty($request->startDate) && !empty($request->endDate)) {
                $activitiesFilter = $activities->where('title', 'like', $request->title . '%')
                                               ->whereBetween('date', [$request->startDate, $request->endDate])
                                               ->get();
            } elseif (!empty($request->title)) {
                $activitiesFilter = $activities->where('title', 'like', $request->title . '%')->get();
            } elseif (!empty($request->startDate) && !empty($request->endDate)) {
                $activitiesFilter = $activities->whereBetween('date', [$request->startDate, $request->endDate])->get();
            }
            else {
                $activitiesFilter = $activities->get();
            }
            return response()->json(['status'=> 200,'activities' => $activitiesFilter]);
            return redirect()->with(['status' => 200, 'activities' => $activitiesFilter]);
        }
        catch(\Exception $e){
            Log::error('Erro ao filtrar atividades: ' . $e->getMessage());
            return redirect()->back()->with(['status'=> 500,'message' => 'Erro ao buscar atividades!']);
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

            $activity =Activity::create([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => $request->activityHourStart,
                'hour_end' => $request->activityHourEnd,
                'status' => $request->activityStatus,
                'audience' => $request->activityAudience,
                'send_by' => Auth::user()->id,
                'thumbnail_photo_url' => '',
                'osc_id' => $osc->id
            ]);
            $path ="oscs/{$osc->id}/activities/0{$activity->id}/";
            $thumbnailName = 'thumbnail00.png'; 
            Storage::put($path.$thumbnailName,file_get_contents($request->file('activityThumbnail')),'public');
            $thumbnailUrl = Storage::url($path.$thumbnailName);

            //Storage::disk('s3')->put('profile-users/' . $profilePictureName, $imageData,'public');

            $activity->update(['thumbnail_photo_url' => $thumbnailUrl]);
            $activity->save();

            if(!empty($request->file('activityImages'))){
                foreach($request->file('activityImages') as $fileDatabase){
                    Storage::put($path.uniqid().'.png',file_get_contents($fileDatabase),'public');
                }    
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
