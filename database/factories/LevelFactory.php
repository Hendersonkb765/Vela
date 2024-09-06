<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Axis;
use App\Models\Level;
use App\Models\Osc;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Level>
 */
class LevelFactory extends Factory
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
            'description' => $this->faker->text,
            'axis_id' => 1,
            'position' => $this->faker->numberBetween(1, 10),
        ];
    }

    public function configure(){
        return $this->afterCreating(function (Level $level) {
            $level->osc()->attach(Osc::inRandomOrder()->first());

        });

    
    }
    
}
