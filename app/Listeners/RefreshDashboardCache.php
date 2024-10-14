<?php

namespace App\Listeners;

use App\Events\DashboardUpdated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RefreshDashboardCache
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(DashboardUpdated $event): void
    {
        //
    }
}
