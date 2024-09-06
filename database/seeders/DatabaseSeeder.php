<?php

namespace Database\Seeders;

use App\Models\Activitie;
use App\Models\Address;
use App\Models\Axis;
use App\Models\Osc;
use App\Models\User;
use App\Models\Cnae;
use App\Models\TargetAudience;
use App\Models\Phone;
use App\Models\Level;
use App\Models\PhoneNumber;
use App\Models\Step;
use App\Models\Task; 
use App\Models\Requeriment;
use App\Models\Requirement;
use App\Models\Feedback;
use Illuminate\Database\Seeder;
use App\Models\TypePerformance;
use Database\Factories\FeedbackFactory;
use App\Models\Answer;
use App\Models\RecurringActivity;
use App\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

     // Criar os registros falsos 
     // php artisan db:seed
    public function run(): void
    {

        Role::factory()->create(['name' => 'Administrador']);
        Role::factory()->create(['name' => 'Presidente']);
        Role::factory()->create(['name' => 'Membro']);
        Role::factory()->create(['name' => 'Voluntário']);
        Role::factory()->create(['name' => 'Equipe Vela']);
        Role::factory()->create(['name' => 'Desenvolvedor']);
        
        User::factory(10)->create();
        User::factory(2)->create(['role_id' => 2]);
        Axis::factory()->create(
             [
                'name'=> 'Markerting',
                'description'=>'O eixo de marketing em uma organização social desempenha um papel crucial ao conectar a missão e os valores da instituição com seu público-alvo. Ele é responsável por desenvolver estratégias que promovem a causa social, aumentam a visibilidade da organização e atraem apoio, seja em forma de doações, voluntariado ou parcerias. A importância desse eixo reside na sua capacidade de comunicar a relevância e o impacto das ações da organização, fortalecer sua marca e criar engajamento contínuo com a comunidade. Assim, o marketing contribui diretamente para o alcance dos objetivos sociais e para a sustentabilidade da organização.'
            ]
        );
        TypePerformance::factory(3)->create();
        //Cnae::factory(3)->create();
        Osc::factory(3)->create();
        for ($i = 1; $i <= 2; $i++) {
            Level::factory()->create([
                'name' => "OSC Marketing Nível $i",
                'description' => "Descrição do Nível $i de marketing.",
                'position' => $i,
                'axis_id'=>1
            ]);
        }
        Task::factory(4)->create(); 
        
        //Address::factory(3)->create();
        
        TargetAudience::factory()->create(['name'=>'Assistência Social']);
        TargetAudience::factory()->create(['name'=>'Saúde']);
        TargetAudience::factory()->create(['name'=>'Defesa de direitos']);
        TargetAudience::factory()->create(['name'=>'Meio Ambiente']);
        TargetAudience::factory()->create(['name'=>'Habitação']);
        TargetAudience::factory()->create(['name'=>'Educação e Pequisa']);
        TargetAudience::factory()->create(['name'=>'Cultura']);
        
        Activitie::factory(4)->create();
        Step::factory(10)->create();
        Requirement::factory(3)->create();
        Feedback::factory(5)->create();
        Answer::factory(5)->create();
        //OscUser::factory(100)->create();
        RecurringActivity::factory(10)->create();
    }

}
