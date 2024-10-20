<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Osc;
use App\Models\Activity;
use App\Models\Address; // Add this line to import the Address class
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ActivityFactory extends Factory
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
            'title' => $this->faker->sentence(),
            'hour_start' => $this->faker->time(),
            'hour_end' => $this->faker->time(),
            'date' => $this->faker->date(),
            'audience' => $this->faker->randomNumber(5),
            'send_by' => $user->name,
            'description' => $this->faker->text(),
            'thumbnail_photo_url' => $this->faker->imageUrl(),
            'osc_id' => Osc::inRandomOrder()->first()->id,
            'send_by' => $user->id,
        ];
    }
    public function configure(){
        return $this->afterCreating(function(Activity $activity){
            $activity->address()->save(Address::factory()->make());
        });
    }
}
