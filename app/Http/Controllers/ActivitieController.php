<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ActivitieController extends Controller
{
    
    public function index(){
        //lista de atividades
        return view('activitie.index');
    }
    public function create(){
        //formulario de cadastro de atividades
        $user = Auth::user();
        return view('activitie.create');
    }
    public function store(){


    }
    public function update(){

    }
    public function destroy(){

    }
}
