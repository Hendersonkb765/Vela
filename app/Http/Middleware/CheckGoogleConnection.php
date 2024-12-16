<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\GoogleToken;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CheckGoogleConnection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        
        // $osc = $request->user()->osc->first();
        // if(Auth::check()){
        //     $cacheKey = 'google_token_'.$osc->id;
        //     $googleDrive = Cache::remember($cacheKey,60,function()use ($osc){
        //         $googleToken = GoogleToken::where('osc_id', $osc->id)->first();
        //         if($googleToken){  
        //             $googleDrive = new GoogleDrive($osc->id);
        //             $googleDrive = $googleDrive->getUserStorageQuota();
        //             return $googleDrive;
        //         }
        //         else{
        //             return false;
        //         }
                

        //     });
        //     $request->attributes->set('storageDrive',$googleDrive);
       
        // }
        
        return $next($request);
    }
}
