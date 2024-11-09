<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class UserQuestionTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic feature test example.
     */

    // php artisan test --filter test_doubt_record
    public function test_doubt_record(): void
    {
        $response = $this->post('/ajuda', [
            'title' => 'Doubt title',
            'description' => 'Doubt description',
        ]);
        $response->assertJson([
            'status' => 200,
            'message' => 'Doubt created successfully'
        ]);
        $response->assertStatus(200);

    }
    
}
