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

    //php artisan test --filter ActivitieTest
    public function test_index_displays_list_of_activities(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
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
