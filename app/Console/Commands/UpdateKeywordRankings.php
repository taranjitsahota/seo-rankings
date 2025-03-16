<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Keyword;
use App\Services\DataForSEOService;
use Illuminate\Support\Facades\Log;

class UpdateKeywordRankings extends Command
{
    protected $signature = 'keywords:update-rankings';
    protected $description = 'Fetch and update keyword rankings';

    public function handle(DataForSEOService $seoService)
    {
        // Fetch keywords that have NULL ranking or search_volume
        $keywords = Keyword::whereNull('ranking')->orWhereNull('search_volume')->get();
    
        if ($keywords->isEmpty()) {
            $this->info('✅ No keywords need updating.');
            return;
        }
    
        foreach ($keywords as $keyword) {
            $rankingData = $seoService->getKeywordRankings($keyword->project->url, $keyword->keyword);
            $metricsData = $seoService->getKeywordMetrics($keyword->keyword);
    
            // Extract position data
            $position = $rankingData['position'] ?? null;
    
            // Extract search volume & competition
            $searchVolume = $metricsData['search_volume'] ?? null;
            $competition = $metricsData['competition_index'] ?? null;
    
            // Update the keyword in the database
            $keyword->update([
                'ranking' => $position,
                'search_volume' => $searchVolume,
                'competition' => $competition,
            ]);
    
            Log::info("Updated Keyword: {$keyword->keyword} - Position: $position, Search Volume: $searchVolume, Competition: $competition");
        }
    
        $this->info('✅ Keyword rankings updated successfully!');
    }
}
