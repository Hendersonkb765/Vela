<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class OscTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    // php artisan test --filter OscTest::test_new_osc_can_register
    public function test_new_osc_can_register(): void
    {

        $user = User::factory()->state(['position'=> 'Presidente'])->create()->first();

        Auth::login($user);

        $response = $this->post('/osc/criar',[
            'cnpj' => '12.345.678/0001-99',
            'institutional_email' => 'osc@example.com',
            'phone_number' => '1112345678',
            'company_name' => 'Nome da Empresa',
            'fantasy_name' => 'Nome Fantasia',
            'presidents_name' => $user->name,
            'foundation_date' => '2000-01-01',
            'banner_url' => 'http://example.com/banner.jpg',
            'legal_nature' => 'Associação',
            'statute_url' => 'http://example.com/statute.pdf',
            'cnae_main' => '1234567',
        ]);
        

        $response->assertStatus(200);
    }
}
