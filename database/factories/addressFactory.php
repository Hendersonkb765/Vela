<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Osc;
use Faker\Factory as FakerFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\address>
 */
class addressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('pt_BR');
        return [
            'counties' => $faker->city(),
            'neighborhood' => $faker->streetName(),
            'states' => $faker->state(),
            'cep' => $faker->postcode(),
            'street' => $faker->streetName(),
            'number' => $faker->buildingNumber(),
            'complement' => $faker->secondaryAddress(),
            'osc_id' => Osc::inRandomOrder()->first()->id,

        ];
    }
}
