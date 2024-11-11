<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Services\ChatGPT\OpenAI;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Address;
use Illuminate\Container\Attributes\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Models\PhotoActivity;
 // Add this line to import the OpenAi class

class ActivityController extends Controller
{

    public function index(){
        //lista de atividades
        // $activities = Auth::user()->osc->first()->activities()->get();
        // dd($activities->with(['google_drive_folders','google_drive_folders']));
        try{
            $activities = Auth::user()->osc->first()->activities()
            ->select('id','title','description','date')
            ->orderBy('date','asc')
            ->get();

            return Inertia::render('VelaSocialLab/ActivityHub/ActivityHub',[
                'activities' => $activities,
            ]);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividades!','error' => $e->getMessage()]);
        }
    }

    public function edit($id){


        try{
            $osc = Auth::user()->osc->first();
            $path = "oscs/{$osc->id}/activities/0{$id}/";
            $allImages = Storage::drive('s3')->allFiles($path);
            $images = [];
                foreach ($allImages as $image) {
                    $fileUrl = Storage::drive('s3')->url($image);
                    $fileType = Storage::drive('s3')->mimeType($image);
                    array_push($images, [
                        'name' => basename($image),
                        'url' => $fileUrl,
                        'type' => $fileType,
                    ]);
                }
    
            return response()->json(['status'=> 200,'images' => $images]);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividade!']);
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
            //return redirect()->with(['status' => 200, 'activities' => $activitiesFilter]);
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
        DB::beginTransaction();
        try{
            $user = Auth::user();
            $osc = Auth::user()->osc->first();
            $activity =Activity::create([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => $request->activityHourStart,
                'hour_end' => $request->activityHourEnd,
                //'status' => $request->activityStatus,
                'audience' => $request->activityAudience,
                'send_by' => $user->name,
                'thumbnail_photo_url' => '',
                'send_by_id' => $user->id,
                'osc_id' => $osc->id,
            ]);
            
            $path ="oscs/{$osc->id}/activities/0{$activity->id}/";
            $thumbnailName = 'thumbnail.png';
            Storage::drive('s3')->put($path.$thumbnailName,file_get_contents($request->file('activityThumbnail')),'public');
            $thumbnailUrl = Storage::drive('s3')->url($path.$thumbnailName);

            //Storage::disk('s3')->put('profile-users/' . $profilePictureName, $imageData,'public');
            $activity->update(['thumbnail_photo_url' => $thumbnailUrl]);
          
            $photos = [];
            if(!empty($request->file('activityImages'))){
                foreach($request->file('activityImages') as $fileDatabase){
                    $photoName = uniqid().'.png';
                    Storage::drive('s3')->put($path.$photoName,file_get_contents($fileDatabase),'public');
                    $photoUrl = Storage::drive('s3')->url($path.$photoName);
                    $photo = ['photo_url' =>$photoUrl];
                    $photos[]= $photo;
                    
                }
                
                $activity->photos()->createMany($photos);
            }
            
            DB::commit();
            return redirect()->back()->with(['status'=> 200,'message' => 'Atividade cadastrada com sucesso!']);
        }
        catch(\Exception $e){
            DB::rollBack(); 
            return response()->json(['status'=> 500,'message' => 'Erro ao cadastrar atividade!', 'error' => $e->getMessage()]);
        }

    }


    public function update(Request $request){
        try{
            
            $idActivity = $request->idActivity;
            $osc = Auth::user()->osc->first();
            $thumbnailName = $request->thumbnailName;
            $newImages = $request->file('newImages');
            $deletedImages = $request->deletedImages;
            $path ="oscs/{$osc->id}/activities/0{$idActivity}/";
            if(!empty($deletedImages)){
 
                foreach($deletedImages as $image){
                    Storage::drive('s3')->delete($path.$image);
                }
            }
            if(!empty($newImages)){
                foreach($newImages as $image){
                    Storage::drive('s3')->put($path.uniqid().'.png',file_get_contents($image),'public');
                }
            }
            if(!empty($thumbnailName)){
                Storage::drive('s3')->put($path.'thumbnail.png',file_get_contents($request->file('thumbnail')),'public');
            }
            $activity = Activity::find($idActivity);
            $activity->update([
                'title' => $request->activityTitle,
                'description' => $request->activityDescription,
                'date' => $request->activityDate,
                'hour_start' => $request->activityHourStart,
                'hour_end' => $request->activityHourEnd,
                // 'status' => $request->activityStatus,
                'audience' => $request->activityAudience,
                //'thumbnail_photo_url' => $activityThumbnailPhotoUrl,
            ]);
        
            if(!empty($request->file('thumbnail'))){
                Storage::delete($path.'thumbnail.png');
                $activityThumbnailPhotoUrl = Storage::put($path.'thumbnail.png',file_get_contents($request->file('thumbnail')),'public');
                $activity->update([
                    'thumbnail_photo_url' => $activityThumbnailPhotoUrl
                ]);
            }
            
            return response()->json(['status'=> 200,'message' => 'Atividade atualizada com sucesso!']);

        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => "Erro ao atualizar atividade! | ". $e->getMessage()]);
        }
    }

    public function destroy(Request $request){
        DB::beginTransaction();
        
        try{
            
            $osc = Auth::user()->osc->first();
            Activity::destroy($request->ActivityId);
            $response = Activity::where('activity_id',$request->ActivityId)->delete();
            
           
           
            $path ="oscs/{$osc->id}/activities/0{$request->ActivityId}";
            Storage::deleteDirectory($path);

            DB::commit();
            return response()->json(['status'=> 200,'message' => 'Atividade deletada com sucesso!']);
        }
        catch(\Exception $e){
            DB::rollBack();
            return response()->json(['status'=> 500,'message' => 'Erro ao deletar atividade!']);
        }
    }
    public function showMore($id){
        try{
            $activity = Activity::find($id);
            $osc= Auth::user()->osc->first();
            $path = "oscs/{$osc->id}/activities/0{$activity->id}/";
            $allImages = Storage::drive('s3')->allFiles($path);
            $photosActivity = PhotoActivity::where('activity_id',$activity->id)->select('photo_url')->get();
            //$photosActivity = $activity->photos()->select('photo_url')->join('')->get();
            $photosActivity = $photosActivity->toArray();
            array_push($photosActivity,['photo_url' => $activity->thumbnail_photo_url]);
        
            /*
            foreach ($allImages as $image) {
                $fileUrl = Storage::drive('s3')->url($image);
                $fileType = Storage::drive('s3')->mimeType($image);
                array_push($images, [
                    'name' => basename($image),
                    'url' => $fileUrl,
                    'type' => $fileType,
                ]);
            }
            */
            return Inertia::render('VelaSocialLab/ActivityHub/Components/SeeMorePage/SeeMorePage',['activity'=>$activity,'images'=>$photosActivity]);
        }
        catch(\Exception $e){
            return response()->json(['status'=> 500,'message' => 'Erro ao buscar atividade!']);
        }
    }

}
