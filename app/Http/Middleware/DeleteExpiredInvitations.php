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
        DB::table('invitation_oscs')->where('osc_id',Auth::user()->id)->where('expires_at','<',now())->update(['status'=>'expired']);

        return $next($request);
    }
}
