<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User; // Add this line to import the User class
use App\Models\Address; // Add this line to import the Address class
use App\Models\Osc; // Add this line to import the Osc class
use App\Models\RecurringActivity; // Add this line to import the RecurringActivity class
use App\Models\DayWeek; // Add this line to import the DayWeek class

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\RecurringActivity>
 */
class RecurringActivityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::inRandomOrder()->first();
        return [
            'name' => $this->faker->name,
            'hour_start' => $this->faker->time(),
            'hour_end' => $this->faker->time(),
            'type_recurrence'=> fake()->randomElement(['Semanal', 'Mensal', 'Esporádico']),
            'description' => $this->faker->text,
            'estimated_audience' => $this->faker->randomNumber(),
            'send_by' => $user->name,
            'pich_url' => $this->faker->url,
            'photo_url' => $this->faker->url,
            'thumbnail_photos_url' => $this->faker->url,
            'osc_id' => Osc::inRandomOrder()->first()->id,
            'responsible_id' => $user->id,
        ];

        
    }

    public function configure(){
        return $this->afterCreating(function(RecurringActivity $recurringActivity){
            $recurringActivity->dayWeek()->attach(DayWeek::factory()->create());

            $recurringActivity->address()->save(Address::factory(['addressable_id'=>$recurringActivity->id,'addressable_type'=>$recurringActivity->getMorphClass()])->make());
        });
    }
}
