<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Keyword;
use App\Services\DataForSEOService;

class UpdateKeywordRankings extends Command
{
    protected $signature = 'keywords:update-rankings';
    protected $description = 'Fetch and update keyword rankings';
    
    public function handle(DataForSEOService $seoService)
    {
        $keywords = Keyword::all();
        // dd($keywords);
        foreach ($keywords as $keyword) {
            $rankingData = $seoService->getKeywordRankings($keyword->project->url, $keyword->keyword);
            dd($rankingData);
            if (!empty($rankingData['result'])) {
                $keyword->update([
                    'ranking' => $rankingData['result'][0]['position'] ?? null,
                    'search_volume' => $rankingData['result'][0]['search_volume'] ?? null,
                    'competition' => $rankingData['result'][0]['competition'] ?? null,
                ]);
            }
        }

        $this->info('Keyword rankings updated!');
    }
}
