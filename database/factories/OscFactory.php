<?php

namespace Database\Factories;

use App\Models\Osc;
use App\Models\User; // Add this line to import the User class
use App\Models\Axis; // Add this line to import the Axis class
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Osc>
 */
class OscFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    protected $model = Osc::class;


    public function definition(): array
    {

        return [
            
            'fantasy_name' => fake()->company(),
            'cnpj' => fake()->unique()->cnpj(),
            'institutional_email' => fake()->unique()->safeEmail(),
            'company_name' => fake()->company(),
            'presidents_name' => $this->generatetPresidentsName(),
            'foundation_date' => fake()->date(),
            'banner_url' => fake()->imageUrl(),
            'img_url' => fake()->text(),
            'legal_nature' => fake()->randomElement(['Ativo','Inativo']),
            'statute_url' => fake()->url(),
            'created_at' => now(),
            'updated_at' => now(),

        ];
    }
    public function configure(){
        
        return $this->afterCreating(function(Osc $osc){

            $users = User::inRandomOrder()->limit(10)->get();
            $osc->user()->attach($users);

            $axis = Axis::inRandomOrder()->first();
            $axis->osc()->attach($osc,['current_level'=>rand(1,10)]);

            //
        });
    }
    public function generatetPresidentsName(){
        $user = User::inRandomOrder()->where('position','Presidente')->first();
        return $user->name;
    }
}
