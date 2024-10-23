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
        
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->time('hour_start');
            $table->time('hour_end');
            $table->date('date');
            $table->integer('audience');
            $table->text('description');
            $table->string('thumbnail_photo_url');
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('send_by_id')->nullable()->constrained('users');
            $table->string('send_by');
            $table->timestamps();
        });

        /*
        Schema::create('address_activitie', function (Blueprint $table) {
            $table->id();
            $table->foreignId('activity_id')->constrained();
            $table->foreignId('address_id')->constrained();
            $table->timestamps();
        });
        */

    
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activities');
        Schema::dropIfExists('address_activities');
    }
};
