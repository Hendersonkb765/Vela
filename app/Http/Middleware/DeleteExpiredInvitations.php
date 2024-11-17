<?php

namespace App\Http\Middleware;

use App\Models\InvitationOsc;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class DeleteExpiredInvitations
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $osc = Auth::user()->osc()->first();
        DB::table('invitation_oscs')->where('osc_id',$osc->id)->where('expires_at','<',now())->update(['status'=>'Expirado']);
        DB::table('invitation_oscs')->where('osc_id',$osc->id)->where('status','Expirado')->where('updated_at','<',now()->subHours(6))->delete();
        return $next($request);
    }
}
