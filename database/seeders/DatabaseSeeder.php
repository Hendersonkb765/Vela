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
        
        
        Axis::factory()->create(
             [
                'name'=> 'Markerting',
                'description'=>'O eixo de marketing em uma organização social desempenha um papel crucial ao conectar a missão e os valores da instituição com seu público-alvo. Ele é responsável por desenvolver estratégias que promovem a causa social, aumentam a visibilidade da organização e atraem apoio, seja em forma de doações, voluntariado ou parcerias. A importância desse eixo reside na sua capacidade de comunicar a relevância e o impacto das ações da organização, fortalecer sua marca e criar engajamento contínuo com a comunidade. Assim, o marketing contribui diretamente para o alcance dos objetivos sociais e para a sustentabilidade da organização.'
            ]
        );
        Level::factory(10)->create();
        Osc::factory(10)->create();
        Task::factory(60)->create(); 
        Address::factory(30)->create();
        Cnae::factory(10)->create();
        TargetAudience::factory()->create(['name'=>'Assistência Social']);
        TargetAudience::factory()->create(['name'=>'Saúde']);
        TargetAudience::factory()->create(['name'=>'Defesa de direitos']);
        TargetAudience::factory()->create(['name'=>'Meio Ambiente']);
        TargetAudience::factory()->create(['name'=>'Habitação']);
        TargetAudience::factory()->create(['name'=>'Educação e Pequisa']);
        TargetAudience::factory()->create(['name'=>'Cultura']);
        TypePerformance::factory(10)->create();
        Activitie::factory(100)->create();
        Telephone::factory(130)->create();

        
        
        Step::factory(20)->create();
        Requirement::factory(10)->create();
        PhoneNumber::factory(20)->create();
        
        //OscUser::factory(100)->create();
    }
}
