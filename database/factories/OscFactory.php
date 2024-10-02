<?php

namespace Database\Factories;

use App\Models\Osc;
use App\Models\User; // Add this line to import the User class
use App\Models\Axis; // Add this line to import the Axis class
use App\Models\Cnae; // Add this line to import the Cnae class
use App\Models\TargetAudience; // Add this line to import the TargetAudience class
use App\Models\TypePerformance; // Add this line to import the TypePerformance class
use Illuminate\Database\Eloquent\Factories\Factory;
use Faker\Factory as FakerFactory;
use App\Models\Address; // Add this line to import the Address class
use App\Models\Phone; // Add this line to import the Phone class
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
            'image_url' => fake()->text(),
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
            $axis->osc()->attach($osc,['current_level'=>rand(1,7)]);

            $osc->cnae()->attach(Cnae::inRandomOrder()->limit(10)->get());

            $osc->targetAudience()->attach(TargetAudience::inRandomOrder()->limit(10)->get());

            $osc->typePerformance()->attach(TypePerformance::inRandomOrder()->limit(10)->get());

            $osc->address()->create(Address::factory(['addressable_id'=>$osc->id,'addressable_type'=>$osc->getMorphClass()])->make()->toArray());

            $osc->phone()->create(Phone::factory(['phoneable_id'=>$osc->id,'phoneable_type'=>$osc->getMorphClass()])->make()->toArray());
        });
    }
    public function generatetPresidentsName(){
        $user = User::where('role_id',2)->inRandomOrder()->first();
        return $user->name;
    }
}
