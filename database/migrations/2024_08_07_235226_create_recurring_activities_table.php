<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('recurring_activities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->time('hour_start');
            $table->time('hour_end');
            $table->enum('type_recurrence',['Semanal', 'Mensal', 'Esporádico']);
            $table->string('description');
            $table->integer('estimated_audience');
            $table->date('date');
            $table->string('send_by');
            $table->string('pich_url');
            $table->string('thumbnail_photos_url');
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('address_id')->constrained();
            $table->timestamps();
        });
        Schema::create('day_weeks', function (Blueprint $table) {
            $table->id();
            $table->boolean('segunda')->default(false);
            $table->boolean('terca')->default(false);
            $table->boolean('quarta')->default(false);
            $table->boolean('quinta')->default(false);
            $table->boolean('sexta')->default(false);
            $table->boolean('sabado')->default(false);
            $table->boolean('domingo')->default(false);
            $table->boolean('Indefinido')->default(false);
            $table->timestamps();
        });
        Schema::create('recurring_day_week',function (Blueprint $table){
            $table->id();
            $table->foreignId('recurring_activity_id')->constrained('recurring_activities');
            $table->foreignId('day_week_id')->constrained();
            $table->timestamps();
        });

        
       

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recurring_activities');
        Schema::dropIfExists('recurring_day_week');
        Schema::dropIfExists('day_week');
    }
};
