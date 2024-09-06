<?php

namespace Database\Factories;

use App\Models\Activitie;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Osc;
use App\Models\Activity;
use App\Models\Address;
use App\Models\RecurringActivity;
use Faker\Factory as FakerFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\address>
 */
class AddressFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $model = fake()->RandomElement([Osc::class,Activitie::class,RecurringActivity::class]);
        $model = $model::factory()->create();
        $faker = FakerFactory::create('pt_BR');
        return [
            'counties' => $faker->city(),
            'neighborhood' => $faker->streetName(),
            'state' => $faker->state(),
            'cep' => $faker->postcode(),
            'street' => $faker->streetName(),
            'number' => $faker->buildingNumber(),
            'complement' => $faker->secondaryAddress(),
            'addressable_id' => $model->id,
            'addressable_type' => $model->getMorphClass(),
            //'osc_id' => Osc::inRandomOrder()->first(),
        ];
    }
    

    
}
