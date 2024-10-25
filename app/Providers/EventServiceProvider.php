<?php

namespace App\Providers;

use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\DashboardUpdated;
use App\Listeners\RefreshDashboardCache;
use App\Listeners\SendVerificationEmail;
use Illuminate\Auth\Events\Authenticated;
use App\Events\VerificationEmail;
use Illuminate\Auth\Events\Registered;
use App\Listeners\EmailVerified;

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
        ],
        Registered::class => [
                SendVerificationEmail::class
        ],
        Verified::class => [
            EmailVerified::class
        ]
        

    ];

    public function boot()
    {
        parent::boot();
    }
}
