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
            $table->foreignId('axis_id')->constrained();
            $table->integer('position'); 
            $table->text('description');
            $table->string('image_url');
            $table->timestamps();
        });
        Schema::create('axis_osc', function (Blueprint $table) {
            $table->id();
            $table->foreignId('axis_id')->constrained();
            $table->foreignId('osc_id')->constrained();
            $table->integer('current_level')->default(1);
            $table->timestamps();
        });
      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('levels');
    }
};
