<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\DashboardUpdated;
use App\Listeners\RefreshDashboardCache;
use App\Listeners\SendVerificationEmail;
use Illuminate\Auth\Events\Authenticated;
use App\Events\VerificationEmail;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        DashboardUpdated::class => [
            RefreshDashboardCache::class,
        ],
        VerificationEmail::class => [
            SendVerificationEmail::class,
        ],
        Authenticated::class => [
            SendVerificationEmail::class,
        ]
       
    ];

    public function boot()
    {
        parent::boot();
    }
}