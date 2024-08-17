<?php

namespace App\Http\Controllers;

use App\Models\Level;
use Illuminate\Http\Request;
use App\Models\Osc;
use App\Models\User;

class DashboardController extends Controller
{
    //

    public function index(){
        
        $user = User::where('id',4)->first();

        dd([$user->osc->first()->level,$user->osc->first()->level->task]);
        
    }
}
