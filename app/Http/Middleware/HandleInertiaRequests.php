<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
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
                ?
                array_merge( $request->user()->only('id', 'name', 'email', 'roleInOrganization'),
                ['profilePicture' => $request->user()->image_url ? $request->user()->image_url : null ] )       
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

