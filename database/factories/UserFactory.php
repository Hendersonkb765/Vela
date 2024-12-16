<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\Role;
use App\Models\User;
use App\Models\Phone; // Add this line to import the Phone class
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'provider' => 'email',
            'sex' => fake()->randomElement(['Masculino', 'Feminino', 'Outros']),
            'birthday' => fake()->date(),   
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
            'role_id' => random_int(1,6),
            'image_url' => fake()->url(),
        ];

    }
  
    public function configure(){
        
        return $this->afterCreating(function(User $user){
            $user->phone()->create(
                Phone::factory(
                    ['phoneable_id'=>$user->id,
                    'phoneable_type'=>$user->getMorphClass()]
                )->make()->toArray());
        });
        
        //$osc->address()->create(Address::factory(['addressable_id'=>$osc->id,'addressable_type'=>$osc->getMorphClass()])->make()->toArray());

    }


    /**
     * Indicate that the model's email address should be unverified.
     */

    

    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => true,
        ]);
    }
}
