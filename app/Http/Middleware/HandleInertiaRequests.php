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
                [
                    'profilePicture' => $request->user()->image_url ? $request->user()->image_url : null,
                     'role'=> $request->user()->role_id ? $this->getRoleFromId($request->user()->role_id) : null
                    
                ] )       
                : null,
          
        ],

        // Dados diferentes para a página de 'settings'
        // 'settingsData' => $request->routeIs('settings')
        //     ? [
        //         'preferences' => $request->user() ? $request->user()->preferences : [],
        //     ] : null,

    ]);
}

 /**
     * Função que converte role_id para o nome da role.
     *
     * @param int $role_id
     * @return string
     */
    protected function getRoleFromId(int $role_id): string
    {
        $roles = [
            1 => 'Presidente',
            2 => 'Membro',
            3 => 'Voluntário',
            // Adicione mais roles conforme necessário
        ];

        return $roles[$role_id] ?? 'Nenhum';
    }
}
