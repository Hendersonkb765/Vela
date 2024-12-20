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
        Schema::create('steps', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('task_id')->constrained();
            $table->text('description');
            $table->integer('position');
            //$table->enum('status', ['pending', 'completed'])->default('pending');
            $table->timestamps();
        });

        Schema::create('osc_step',function(Blueprint $table){
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('step_id')->constrained();
            $table->enum('status', ['pending', 'completed'])->default('pending');
            $table->timestamps();
        });

        

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('steps');
    }
};
