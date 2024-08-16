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
            $table->string('send_by');
            $table->text('description');
            $table->string('img_url');
            $table->string('thumbnail_photos_url');
            $table->string('photos_url');
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->timestamps();
        });

        
        Schema::create('address_activitie', function (Blueprint $table) {
            $table->id();
            $table->foreignId('activity_id')->constrained();
            $table->foreignId('address_id')->constrained();
            $table->timestamps();
        });

    
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
