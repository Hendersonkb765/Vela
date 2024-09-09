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
    public function test_index_displays_list_of_activities(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
    public function test_register_activity(): void
    {
        $user = User::factory()->create();
        Auth::login($user);

        $response = $this->post('/dashboard', [
            'title' => 'Atividade 1',
            'description' => 'Descrição da atividade 1',
            'start_date' => '2021-10-01',
            'end_date' => '2021-10-10',
            'status' => 'Ativa',
        ]);

        $response->assertStatus(200);
    }
}
