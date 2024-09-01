<?php

namespace Database\Factories;

use App\Models\Step;
use Database\Factories\Osc;
use Database\Factories\Axis;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Requirement;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RequirementFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'folder_url' => fake()->url,
            'type' => fake()->randomElement(['link', 'documento', 'video', 'outros']),
            'status' => fake()->randomElement(['concluido','pendente','em analise']),
            'user_id' => User::inRandomOrder()->where('position','Equipe Vela')->first()->id,
        ];
    }

    public function configure(){
        
        return $this->afterCreating(function(Requirement $requirement){

            $steps = Step::inRandomOrder()->limit(20)->get();
            $requirement->step()->attach($steps);

        });
    }
}
