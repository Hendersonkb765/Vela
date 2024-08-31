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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('level_id')->constrained();
            $table->text('description');
            $table->enum('status', ['pending', 'completed'])->default('pending');
            $table->string('message_conclusion');
            $table->timestamps();
        });

        Schema::create('task_orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('task_id')->constrained();
            $table->integer('order_number')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
