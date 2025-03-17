<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        /** @var \App\Models\User $user */
        $user = auth()->user();
        $query = Project::with('keywords');

    // If user is not an admin, show only their projects
    if (!$user->isAdmin()) {
        $query->where('user_id', auth()->id());
    }

    $projects = $query->latest()->get();

    return Inertia::render('Projects', ['projects' => $projects]);
    }

    public function getProjectKeywordData()
    {

        /** @var \App\Models\User $user */
        $user = Auth::user();

        $query = Project::with('keywords');

        if (!$user->isAdmin()) {
            $query->where('user_id', $user->id);
        }

        $projects = $query->get();
        // $projects = Project::with('keywords')->get();

        $formattedData = $projects->map(function ($project) {
            return [
                'name' => $project->name,
                'keywords' => $project->keywords->map(function ($keyword) {
                    return [
                        'keyword' => $keyword->keyword,
                        'ranking' => $keyword->ranking,
                        'search_volume' => $keyword->search_volume,
                        'competition' => $keyword->competition,
                    ];
                }),
            ];
        });

        return response()->json($formattedData);
    }

    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       /** @var \App\Models\User $user */
    $user = auth()->user(); // Explicitly defining the type for better editor recognition

    $request->validate([
        'name' => 'required|string|max:255',
        'url' => 'required|max:255'
    ]);

    $user->projects()->create([
        'name' => $request->name,
        'url' => $request->url
    ]);

    return redirect()->route('projects.index')->with('success', 'Project created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        try {
            $project->delete();
            return redirect()->back()->with('success', 'Project deleted successfully!');
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to delete project'], 500);
        }
    
    }
}
