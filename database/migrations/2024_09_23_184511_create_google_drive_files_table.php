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
        Schema::create('google_drive_files', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('file_id');
            $table->foreignId('folder_id')->constrained('google_drive_folders');
            $table->dateTime('creation_file_date');
            $table->dateTime('modification_file_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drive_files');
    }
};
