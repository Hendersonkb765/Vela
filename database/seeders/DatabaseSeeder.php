<?php

namespace Database\Seeders;

use App\Models\Activitie;
use App\Models\Address;
use App\Models\Axe;
use App\Models\Axes;
use App\Models\Osc;
use App\Models\OscUser;
use App\Models\User;
use App\Models\Cnae;
use App\Models\TargetAudience;
use App\Models\Telephone;
use App\Models\Level;
use App\Models\Step;
use App\Models\Task; 
use Illuminate\Database\Seeder;
use Mockery\Matcher\Type;
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
        Osc::factory(10)->create();
        Address::factory(30)->create();
        Cnae::factory(10)->create();
        TargetAudience::factory(13)->create();
        TypePerformance::factory(10)->create();
        Activitie::factory(100)->create();
        Telephone::factory(130)->create();
        Axe::factory(10)->create();
        Level::factory(10)->create();
        Task::factory(20)->create();
        Step::factory(20)->create();
        
        //OscUser::factory(100)->create();
    }
}
