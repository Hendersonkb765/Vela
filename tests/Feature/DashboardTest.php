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
        $response = $this->get('/dashboard/back');

        $response->assertInertia();
        
    }
    
}
