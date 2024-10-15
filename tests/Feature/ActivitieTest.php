<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ActivitieTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    //php artisan test --filter ActivitieTest/test_index_displays_list_of_activities
    public function test_index_displays_list_of_activities(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    /*
    php artisan test --filter test_filter_activities_by_date
    */
    public function test_filter_activities_by_date(): void
    {
        Auth::loginUsingId(14);

        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->postJson(route('activity.filter'), ['title'=>'','startDate' => '1999-10-01', 'endDate' => '2025-10-01']);
        //echo dd($response);
        $response->assertStatus(200);
        $response->assertJsonStructure(['status','activities']);

        //echo "Resposta json:".json_encode($response->json());
    }

    /*
    php artisan test --filter test_filter_activities_by_title
    */
    public function test_filter_activities_by_title(): void
    {
        Auth::loginUsingId(14);

        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->postJson(route('activity.filter'), ['title'=>'a','startDate' => '', 'endDate' => '']);
        //echo dd($response);
        $response->assertStatus(200);
        $response->assertJsonStructure(['status','activities']);

        echo "Resposta json:".json_encode($response->json());
    }
    public function test_register_activity(): void
    {
        Auth::loginUsingId(14);

        $response = $this->post(route('activitie.store'), [
            'title' => 'Atividade 1',
            'description' => 'Descrição da atividade 1',
            'date' => '2025-10-01',
            'hour_start' => '08:00',
            'hour_end' => '12:00'
        ]);

        $response->assertStatus(200);
    }
}
