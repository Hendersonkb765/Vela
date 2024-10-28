<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\UploadedFile;

class ActivitieTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    //php artisan test --filter test_index_displays_list_of_activities
    public function test_index_displays_list_of_activities(): void
    {
        $response = $this->get(route('activityhub'));

        $response->assertStatus(302);
    }
    /*
    php artisan test --filter test_filter_activities_by_date
    */
    
    public function test_filter_activities_by_date(): void
    {
        Auth::loginUsingId(11);
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->postJson(route('activity.filter'), ['title'=>'','startDate' => '1999-10-01', 'endDate' => '2025-10-01']);
        $response->assertStatus(200);
        $response->assertJsonStructure(['status','activities']);

        //echo "Resposta json:".json_encode($response->json());
    }

    /*
    php artisan test --filter test_filter_activities_by_title
    */
    public function test_filter_activities_by_title(): void
    {
        Auth::loginUsingId(11);
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->postJson(route('activity.filter'), ['title'=>'a','startDate' => '', 'endDate' => '']);
        $response->assertStatus(200);
        $response->assertJsonStructure(['status','activities']);

    }
    /*
    php artisan test --filter test_register_activity
    */
    public function test_register_activity(): void
    {
        Auth::loginUsingId(11);
      
        $file = UploadedFile::fake()->image('avatar.jpg');	
        echo dd($file);
        $response = $this->post(route('activitie.store'), [
            'activityTitle' => 'Titulo de arividade de exemplo',
            'activityDescription' => 'asfsadfgl lkdgk safknvcxz',
            'activityDate' => '2023-10-01',
            'activityHourStart' => '10:00',
            'activityHourEnd' => '12:00',
            'activityAudience' => 33,
            'activityThumbnail' => $file
            
        ]);

        $response->assertStatus(200);
    }
}
