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
        Schema::create('axes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->foreignId('user_id')->constrained();
            $table->text('description');
            $table->integer('current_level_id')->nullable(); 
            $table->timestamps();
        });

        Schema::create('axis_osc', function (Blueprint $table) {
            $table->id();
            $table->foreignId('axis_id')->constrained();
            $table->foreignId('osc_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('axes');
    }
};
