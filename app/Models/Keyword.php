<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Keyword extends Model
{
    use HasFactory;

    protected $fillable = ['project_id', 'keyword', 'ranking', 'search_volume', 'competition'];

    public function project() {
        return $this->belongsTo(Project::class);
    }
    
}
