<?php

namespace Database\Seeders;

use App\Models\Activitie;
use App\Models\Address;
use App\Models\Axis;
use App\Models\Osc;
use App\Models\User;
use App\Models\Cnae;
use App\Models\TargetAudience;
use App\Models\Telephone;
use App\Models\Level;
use App\Models\PhoneNumber;
use App\Models\Step;
use App\Models\Task; 
use App\Models\Requeriment;
use App\Models\Requirement;
use Illuminate\Database\Seeder;
use App\Models\TypePerformance;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

     // Criar os registros falsos 
     // php artisan db:seed
    public function run(): void
    {

        User::factory(100)->create();
        User::factory(10)->state(['position' => 'Presidente'])->create();
        User::factory(10)->state(['position' => 'Equipe Vela'])->create();
        Requirement::factory(10)->create();
        Osc::factory(10)->create();
        Axis::factory(7)->create();
        Level::factory(10)->create();
        Task::factory(60)->create(); 
        Address::factory(30)->create();
        Cnae::factory(10)->create();
        TargetAudience::factory(13)->create();
        TypePerformance::factory(10)->create();
        Activitie::factory(100)->create();
        Telephone::factory(130)->create();

        
        
        Step::factory(20)->create();
        PhoneNumber::factory(20)->create();
        
        //OscUser::factory(100)->create();
    }
}
