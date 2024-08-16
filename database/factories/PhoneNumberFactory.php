<?php

namespace Database\Factories;

use App\Models\Osc;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhoneNumber>
 */
class PhoneNumberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'number' => fake()->phoneNumber(),
            'osc_id'=> Osc::inRandomOrder()->first()->id,
        ];
    }

}
