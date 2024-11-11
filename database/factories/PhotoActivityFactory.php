<?php

namespace Database\Factories;
use App\Models\PhotoActivity;
use Illuminate\Database\Eloquent\Factories\Factory;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PhotoActivity>
 */
class PhotoActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'photo_url' => $this->faker->imageUrl(),
        ];
    }
}
