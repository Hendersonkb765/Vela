<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use App\Services\Google\Drive\GoogleDrive;
class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
public function share(Request $request)
{
   
    return array_merge(parent::share($request), [
        'auth' => [
            'user' => fn () => $request->user()
                ? $request->user()->only('id', 'name', 'email', 'profilePicture', 'roleInOrganization')
                : null,
          
        ],

        // Dados diferentes para a página de 'settings'
        // 'settingsData' => $request->routeIs('settings')
        //     ? [
        //         'preferences' => $request->user() ? $request->user()->preferences : [],
        //     ] : null,

    ]);
}
}

