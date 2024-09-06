<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Feedback;
use App\Models\Requirement;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'message' => $this->faker->text,
            'rating'=> fake()->randomElement(['1','2','3','4','5']),
            'team_vela' => User::all()->random()->first(),
            'requirement_id'=> Requirement::inRandomOrder()->first(),
        ];
    }
}
