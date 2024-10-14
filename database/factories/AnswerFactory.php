<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Answer; // Add this line to import the 'Answer' model
use App\Models\Address; // Add this line to import the 'Address' model
use App\Models\Feedback; // Add this line to import the 'Feedback' model
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Answer>
 */
class AnswerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            'feedback_id' => Feedback::inRandomOrder()->first(),
            'message' => $this->faker->text,
            'author_id' => User::inRandomOrder()->first(),

        ];
    }
}
