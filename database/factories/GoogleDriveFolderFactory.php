<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\GoogleDriveFolder>
 */
class GoogleDriveFolderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'folder_id' => $this->faker->word(),
            'osc_id' => \App\Models\Osc::factory(),
            'creation_folder_date' => $this->faker->dateTime(),
        ];
    }
}
