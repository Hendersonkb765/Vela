<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TypePerformance;
use App\Models\Osc;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TypePerformance>
 */
class TypePerformanceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(),
        ];
    }

  
}
