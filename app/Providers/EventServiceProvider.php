<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\DashboardUpdated;
use App\Listeners\RefreshDashboardCache;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        DashboardUpdated::class => [
            RefreshDashboardCache::class,
        ],
    ];

    public function boot()
    {
        parent::boot();
    }
}