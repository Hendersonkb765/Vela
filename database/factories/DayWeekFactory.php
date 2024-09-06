<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DayWeek>
 */
class DayWeekFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'segunda'=> fake()->randomElement([true,false]),
            'terca'=> fake()->randomElement([true,false]),
            'quarta'=> fake()->randomElement([true,false]),
            'quinta'=> fake()->randomElement([true,false]),
            'sexta'=> fake()->randomElement([true,false]),
            'sabado'=> fake()->randomElement([true,false]),
            'domingo'=> fake()->randomElement([true,false]),
        ];
    }


}
