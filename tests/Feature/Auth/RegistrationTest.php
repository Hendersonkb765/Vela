<?php

namespace Tests\Feature\Auth;

use App\Mail\InvitationCode;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Facades\Mail;

//php artisan test --filter RegistrationTest
class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_registration_screen_can_be_rendered(): void
    {
        $response = $this->get('/register');
        $response->assertStatus(200);

    }

    public function test_new_users_can_register(): void
    {
        $response = $this->post('/register', [
            'name' => 'Test User',
            'birthday' => '1999-01-01',
            'position' => 'Presidente',
            'sex' => 'Masculino',
            'email' => 'hendersonkb765@gmail.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect(route('dashboard', absolute: false));
    }
    public function test_new_presidents_can_register(): void
    {
        $response = $this->post('/novo/presidente', [
            'name' => 'Test User',
            'email' => 'hendersonkb765@gmail.com',
            'password' => 'password',
            'birthday' => '1999-01-01',      
            'sex' => 'Masculino',
            'position' => 'Presidente',   
            'osc_name' => 'nome da osc',
            'foundation_date' => '2000-01-01', 
            'password_confirmation' => 'password'
            
        ]);


        $response->assertRedirect(route('dashboard', absolute: false));

    }
}