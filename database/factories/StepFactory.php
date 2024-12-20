<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Task;
use App\Models\Step;
use App\Models\Osc;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Step>
 */
class StepFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=> fake()->title(),
            'task_id' => Task::inRandomOrder()->first(),
            'description' => fake()->text(),
            'position'=> fake()->NumberBetween(1,10),
            //'status' => fake()->randomElement(['pending', 'completed']),

        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Step $step) {
           $oscs = Osc::all();
           foreach($oscs as $osc){
               $step->osc()->attach($osc->id);
           }
            
           
        });
    }

}
