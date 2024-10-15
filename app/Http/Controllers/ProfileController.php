<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Auth\Events\Validated;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        //dd($request->validated()['user']);
        //dd($request->user['profilePicture']);
        $imageData = $request->user['profilePicture'];
        $request->user()->fill($request->validated()['user']);
        $profilePictureName = basename(Auth::user()->image_url);
        if (isset( $imageData)) {
            //$imageData = $request->user['profilePicture'];
            
            if(!str_starts_with($imageData, 'http')){
            
                list($type, $imageData) = explode(';', $imageData);
                list(, $imageData) = explode(',', $imageData);
                $imageData = base64_decode($imageData);

                if(empty($profilePictureName)){
                    $profilePictureName = uniqid() . '.png';
                }
                if (!Storage::disk('public')->exists('profile-photos')) {
                    Storage::disk('public')->makeDirectory('profile-photos');
                }
                Auth::user()->image_url = asset('storage/profile-photos/' . $profilePictureName);   
                Storage::disk('public')->put('profile-photos/' . $profilePictureName, $imageData);
            }
        }

        $request->user()->save();
        

        return redirect()->back()->with(['status' => '200','message'=> 'Perfil atualizado com sucesso!']);
    }
    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);
        $user = $request->user();
        
        Auth::logout();
        $user->activities()->update(['user_id' => null]);
        $user->delete();
        
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
