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

        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('counties');
            $table->string('neighborhood');
            $table->string('state');
            $table->string('cep');
            $table->string('street');
            $table->string('number');
            $table->string('complement')->nullable();
            $table->morphs('addressable');
            $table->timestamps();
        });
        
      
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('address');
      

    }
};
