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
        Schema::create('google_drive_folders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->dateTime('creation_folder_date');
            $table->foreignId('osc_id')->constrained();
            $table->string('folder_id');
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('google_drive_folders');
    }
};
