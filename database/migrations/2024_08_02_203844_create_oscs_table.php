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
        Schema::create('oscs', function (Blueprint $table) {
            $table->id();
            $table->string('cnpj')->unique();
            $table->string('institutional_email',);
            $table->string('company_name')->nullable();
            $table->string('fantasy_name')->nullable();
            $table->string('presidents_name');
            $table->date('foundation_date');
            $table->string('banner_url')->nullable();
            $table->string('img_url')->nullable();
            $table->string('legal_nature')->nullable();
            $table->string('statute_url')->nullable();
            $table->string('cnae_main')->nullable();            
            $table->timestamps();
        });

        Schema::create('phone_numbers', function (Blueprint $table) {
            $table->id();
            $table->string('number');
            $table->foreignId('osc_id')->constrained();
            $table->timestamps();
        });
        Schema::create('cnaes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->timestamps();
        });

        Schema::create('cnae_osc', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('cnae_id')->constrained();
            $table->timestamps();
        });

        Schema::create('target_audiences', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('osc_target_audience', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('target_audience_id')->constrained();
            $table->timestamps();
        });
        Schema::create('type_performances', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });
        Schema::create('osc_type_performance', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('type_performance_id')->constrained();
            $table->timestamps();
        });
        
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('oscs');
        Schema::dropIfExists('cnaes');
        Schema::dropIfExists('osc_cnae');
        Schema::dropIfExists('target_audiences');
        Schema::dropIfExists('osc_target_audiences');
        Schema::dropIfExists('osc_type_performance');
        Schema::dropIfExists('type_performances');

    }
};
