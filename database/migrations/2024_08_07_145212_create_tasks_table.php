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
            $table->text('description');
            $table->string('message_conclusion');
            $table->foreignId('level_id')->constrained('levels');
            $table->timestamps();
        });

        Schema::create('osc_task', function (Blueprint $table) {
            $table->id();
            $table->foreignId('osc_id')->constrained();
            $table->foreignId('task_id')->constrained();
            $table->enum('status', ['pendente', 'concluído'])->default('pendente');
            $table->timestamps();
        });

        /*
        Schema::create('level_task', function (Blueprint $table) {
            $table->id();
            $table->foreignId('level_id')->constrained('axis_level');
            $table->foreignId('task_id')->constrained();
            $table->timestamps();
        });
        */
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
