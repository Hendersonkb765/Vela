<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Osc;
use Faker\Factory as FakerFactory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cnae>
 */
class CnaeFactory extends Factory
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
            'name' => $faker->name(),
            'code' => $faker->randomNumber(5),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (\App\Models\Cnae $cnae) {
            $oscs = Osc::inRandomOrder()->limit(10)->get();
            $cnae->oscs()->attach($oscs);
        });
    }
}
