<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Level;
use App\Models\Osc;
use App\Models\Task;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=> fake()->sentence(),
            'level_id'=>fake()->numberBetween(1,2),
            'description' => fake()->text(),
            //'status' => fake()->randomElement(['pending', 'completed']),
            'message_conclusion' => fake()->text()
        ];
    }
    public function configure()
    {
        return $this->afterCreating(function (Task $task) {
            $task->order()->create([
                'order_number' => fake()->numberBetween(1,7),
            ]);
            $oscs = Osc::all();
            foreach($oscs as $osc){
                $task->osc()->attach($osc->id);
            }
                
        });
    }

    
}
