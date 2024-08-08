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
        Schema::create('states', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('uf');
            $table->timestamps();
        });
        Schema::create('address', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->string('city');
            $table->string('neighborhood');
            $table->string('cep');
            $table->string('street');
            $table->string('number');
            $table->string('complement')->nullable();
            $table->foreignId('state_id')->constrained();
            $table->timestamps();
        });
        
        Schema::create('counties', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('state_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('address');
        Schema::dropIfExists('states');
        Schema::dropIfExists('counties');

    }
};
