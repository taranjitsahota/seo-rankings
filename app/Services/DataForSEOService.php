<?php 

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;

class DataForSEOService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://app.dataforseo.com/',
            'auth' => ['team@dmcockpit.com', 'Pass@123'], // Basic Auth (Email & Password)
        ]);
    }

    public function getKeywordRankings($url, $keyword)
    {
        try {
            // dd($url,$keyword);
            $response = $this->client->request('POST', 'v3/serp/google/organic/task_post', [
                'json' => [
                    'data' => [ // ✅ The API requires an array of tasks
                        [
                            'keyword' => $keyword,  
                            'url' => $url,
                            'search_engine' => 'google.com',
                        ]
                    ]
                ],
                'headers' => [
                    'Authorization' => 'Basic ' . base64_encode('team@dmcockpit.com:Pass@123'),
                    'Content-Type' => 'application/json',
                ],

            ]);

            // Decode JSON response
            $body = $response->getBody()->getContents();
            $data = json_decode($body, true);
            Log::info('DataForSEO API Response:', $data);

            return $data;

        } catch (\Exception $e) {
            Log::error('DataForSEO API Error: ' . $e->getMessage());
            return null;
        }
    }
}
