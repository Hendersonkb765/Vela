<?php

namespace Database\Factories;

use App\Models\Osc;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Phone>
 */
class PhoneFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $phoneableType = $this->faker->randomElement([User::class, Osc::class]);
        $phoneable = $phoneableType::factory()->create();
        return [
            'number' => $this->faker->phoneNumber(),
            'phoneable_id' => $phoneable->id,
            'phoneable_type' => $phoneableType,
        ];
    }
}
