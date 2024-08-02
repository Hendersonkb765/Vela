<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        VerifyEmail::toMailUsing(function ($noitifiable, $url) {
            return (new \Illuminate\Notifications\Messages\MailMessage)
                ->subject('Confirme seu endereço de e-mail')
                ->line("Clique no botão abaixo para verificar seu endereço de e-mail.")
                ->action('Verificar e-mail', $url);
        });
    }
}
