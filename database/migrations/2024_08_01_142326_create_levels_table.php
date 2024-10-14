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
        Schema::create('levels', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('axis_id');
            $table->integer('position'); 
            $table->text('description');
            $table->timestamps();
        });
        Schema::create('level_osc', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('level_id')->constrained('levels');
            $table->timestamps();
        });

        // Schema::create('axis_level', function (Blueprint $table) {
        //     $table->id();
        //     $table->foreignId('axis_id')->constrained();
        //     $table->foreignId('level_id')->constrained('levels');
        //     $table->timestamps();
        // });
        
      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
