<?php

namespace Database\Factories;

use App\Models\TargetAudience;
use App\Models\Osc; // Add this line to import the Osc class
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class TargetAudienceFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
        ];
    }
    public function configure(){

        return $this->afterCreating(function(TargetAudience $model){
            $oscs = Osc::inRandomOrder()->first();
            $model->osc()->attach($oscs);
        } );
    }
}
