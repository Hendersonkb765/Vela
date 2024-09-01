<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User; // Add this line to import the User class
use App\Models\Axis; // Add this line to import the Axe class
use App\Models\Osc;
use App\Models\Level; // Add this line to import the Level class

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class AxisFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            
            'name' => $this->faker->name(),
            'image' => $this->faker->imageUrl(),
            'description' => $this->faker->text(),
            'responsible_id' => User::inRandomOrder()->first()->id,
        ];
    }
    /*
    public function configure(){
        
        return $this->afterCreating(function(Axis $axe){

            $osc = Osc::inRandomOrder()->limit(10)->get();
            $axe->osc()->attach($osc);

        });
    }
        */

    
   
}
