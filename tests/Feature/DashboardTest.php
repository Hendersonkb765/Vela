<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use PHPUnit\Framework\Assert;

class DashboardTest extends TestCase
{
    /**
     * A basic feature test example.
     */

     // php artisan test --filter DashboardTest::test_access_to_the_dashboard
    public function test_access_to_the_dashboard(): void
    {
        $user = User::factory()->create();
        $user = Auth::loginUsingId($user->id);
        
        //$user->osc()->attach(1);
        assertTrue(Auth::check(),'Usuário não autenticado');
        $response = $this->get(route('dashboard'));
        $response->assertStatus(200);
        $response->assertInertia();
        $response->assertInertia(fn ($page) => $page
        ->component('Dashboard')
        ->has('user',fn ($page) => $page
            ->where('id', $user->id)
            ->where('name', $user->name)
            ->where('email', $user->email)
            ->where('profilePicture')
            ->where('roleInOrganization')
            ->etc()
            )
        );
        
    }
    
}
