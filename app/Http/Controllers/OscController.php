<?php

namespace App\Http\Controllers;

use App\Models\Osc;
use Illuminate\Auth\Events\Validated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class OscController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //

        $oscs = Osc::all();

        foreach ($oscs as $osc) {
            echo $osc->user->name;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'cnpj'=>'required|max:18',
            'presidents_name'=>'required',
            'foundation_date'=>'required',

        ]);

        /*
        Osc::create([
            'name'=>$request['name'],
            'cnpj'=>$request['cnpj'],
            'institutional_email'=>$request['institutional_email'],
            'phone_number'=>$request['phone_number'],
            'company_name'=>$request['company_name'],
            'fantasy_name'=>$request['fantasy_name'],
            'presidents_name'=>Auth::user()->name,
            'foundation_date'=>$request['foundation_date'],
            'banner_url'=>$request['banner_url'],
            'img_url'=>$request['img_url'],
            'legal_nature'=>$request['legal_nature'],
            'statute_url'=>$request['statute_url'],
            'cnae_main'=>$request['cnae_main'],
            'user_id'=>Auth::user()->id,
        ]);
        */

        $osc =Osc::create([
            'cnpj' => $request->input('cnpj', null),
            'institutional_email' => $request->input('institutional_email', null),
            'company_name' => $request->input('company_name', null),
            'fantasy_name' => $request->input('fantasy_name', null),
            'presidents_name' => Auth::user()->name,
            'foundation_date' => $request->input('foundation_date', null),
            'banner_url' => $request->input('banner_url', null),
            'img_url' => $request->input('img_url', null),
            'legal_nature' => $request->input('legal_nature', null),
            'statute_url' => $request->input('statute_url', null),
            'cnae_main' => $request->input('cnae_main', null),
        ]);

        $osc->phoneNumber()->create([
            'number' => $request->phone_number,
            'osc_id' => $osc->id,
        ]);

        $osc->user()->attach(Auth::user()->id);

        


    }

    /**
     * Display the specified resource.
     */
    public function show(Osc $osc)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Osc $osc)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Osc $osc)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Osc $osc)
    {
        //
    }
}
