<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\UploadedFile;

// php artisan test --filter=ActivitieTest
class ActivitieTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    // testNomeDoMetodoOuFuncionalidade_CondicaoEsperada_ResultadoEsperado \\

    //php artisan test --filter test_index_displays_list_of_activities
    public function test_displays_list_of_activities(): void
    {
        $response = $this->get(route('activityhub'));

        $response->assertStatus(302);
    }
    /*
    php artisan test --filter test_filter_activities_by_date
    */
    //user can filter activities by date
    public function test_filter_activities_by_date(): void
    {
        Auth::loginUsingId(3);
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
    public function test_register_an_activity(): void
    {
        Auth::loginUsingId(11);
      
        $file = UploadedFile::fake()->image('avatar.jpg');
        $files = [
            UploadedFile::fake()->image('avatar.jpg'),
            UploadedFile::fake()->image('avatar.jpg'),
            UploadedFile::fake()->image('avatar.jpg'),
        ];	
        $response = $this->post(route('activity.store'), [
            'activityTitle' => 'Titulo de arividade de exemplo',
            'activityDescription' => 'asfsadfgl lkdgk safknvcxz',
            'activityDate' => '2023-10-01',
            'activityHourStart' => '10:00',
            'activityHourEnd' => '12:00',
            'activityAudience' => 33,
            'activityThumbnail' => $file,
            'activityImages' => $files
            
        ]);
        $response->assertStatus(302);
    }
    // php artisan test --filter test_destroy_activity
    public function test_deletar_an_activity(): void
    {
        Auth::loginUsingId(11);
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->deleteJson(route('activity.destroy'), ['activityId' => 1]);
        $response->assertStatus(200);
        $response->assertJsonStructure(['status','message']);
    }
    // php artisan test --filter test_show_more_activity
//  show activity details
    public function test_show_activity_details(): void
    {
        Auth::loginUsingId(11);
        $activity = \App\Models\Activity::factory()->create();
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->get(route('activity.showMore',['id'=>$activity->id]));
        $response->assertInertia(fn ($page) =>$page
        ->component('VelaSocialLab/ActivityHub/Components/SeeMorePage/SeeMorePage')
        ->has('activity', fn($page)=> $page
        ->where('id',$activity->id)
        ->etc())
        ->has('images')
        );
    }
    // php artisan test --filter test_display_modal_to_change_activity_data
    public function test_display_modal_to_change_activity_data(){
        Auth::loginUsingId(11);
        $activity = \App\Models\Activity::factory()->create();
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->get(route('activity.edit',['id'=>$activity->id]));
        $response->assertJson(['status'=>200]);


    }
    // php artisan test --filter test_change_activity_data
    public function test_change_activity_data(){
        Auth::loginUsingId(11);
        $activity = \App\Models\Activity::factory()->create();
        $this->assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->patchJson(route('activity.update'),[
            'idActivity'=>$activity->id,
            'activityTitle' => 'Titulo de arividade de exemplo',
            'activityDescription' => 'asfsadfgl lkdgk safknvcxz',
            'activityDate' => '2023-10-01',
            'activityHourStart' => '10:00',
            'activityHourEnd' => '12:00',
            'activityAudience' => 33,
        ]);
        $response->assertStatus(200);
  
    }
}
