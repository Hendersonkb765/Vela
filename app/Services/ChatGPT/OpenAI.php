<?php 

namespace App\Services\ChatGPT;

use GuzzleHttp\Client;

class OpenAI{

    protected $client;
    public function __construct()
    {
        
        $this->client = new Client([
            'base_uri' => 'https://api.openai.com/v1/chat/',
            'headers' => [
                'Content-Type' => 'application/json',
                'Authorization'=> 'Bearer '.config('services.openai.api_key'),
                //'OpenAI-Organization'=> config('services.openai.organization_id'),
                //'OpenAI-Project'=>config('services.openai.project_id')
                ]
        ]);
    

    }

    public function chatGPT(string $systemMessage,string $userMessage,string $model='gpt-4o-mini'){
        try{
            $responde = $this->client->post('completions',[
                'json' => [
                    'model' => $model,
                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => $systemMessage
                        ],
                        [
                            'role' => 'user',
                            'content' => $userMessage
                        ]
                    ]
                ]
            ]);
            if($responde->getStatusCode() == 200){

                $response = json_decode($responde->getBody()->getContents());
                $message = $response->choices[0]->message->content;

                return ['status' => 200,'message' => $message];
            }
            else{
                return ['status' => 500,'message' => 'Erro ao conectar com a API'];
            }
            
        }
        catch(\Exception $e){
            return ['status' => 500,'message' => 'Erro ao conectar com a API'];
        }
    }
    
}