<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\GoogleToken;
use App\Services\Google\Drive\GoogleDrive;

class CheckGoogleConnection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $osc = $request->user()->osc->first();
        $googleToken = GoogleToken::where('osc_id',$osc->id)->first();
        if($googleToken){  
            $googleDrive = new GoogleDrive($osc->id);
            $googleDrive = $googleDrive->getUserStorageQuota();
        }
        else{
            $googleDrive = false;
        }
        $request->attributes->set('storageDrive',$googleDrive);
       
        return $next($request);
    }
}
