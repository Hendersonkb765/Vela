<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke($id,$hash): RedirectResponse
    {
        try{
            $user = User::find($id);
            if(empty($user->email_verified_at)){
                $user->email_verified_at = now();
                $user->save();
            }
            if(Auth::check()){
                return redirect()->intended(route('dashboard', absolute: false).'?verified=1');
            }
            else{
                return dd("Email verificado, você não está logado");
            }
        }
        catch(\Exception $e){
            return back()->with('status', 'verification-link-sent');
        }
        

    }
}
