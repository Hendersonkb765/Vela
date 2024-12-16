<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InvitationOsc>
 */
class InvitationOscFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'email' => $this->faker->email(),
            'token' => $this->faker->sha256(),
            'expires_at' => $this->faker->dateTime(),
            'osc_id' => \App\Models\Osc::factory(),
            'status' => $this->faker->randomElement(['Pendente', 'Expirado']),
            
        ];
    }
}
