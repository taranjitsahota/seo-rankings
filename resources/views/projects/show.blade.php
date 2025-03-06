@extends('layouts.layout')

@section('title', $project->name)

@section('content')
    <h2 class="text-2xl font-bold">{{ $project->name }}</h2>
    <p class="text-gray-600">{{ $project->url }}</p>

    <h3 class="mt-5 text-xl font-bold">Keywords</h3>
    <a href="{{ route('projects.keywords.create', $project) }}" class="bg-blue-500 text-white px-4 py-2 rounded">Add Keyword</a>

    <div class="mt-5">
        @foreach($project->keywords as $keyword)
            <div class="bg-white p-4 rounded shadow mb-4">
                <p class="text-gray-800">{{ $keyword->keyword }}</p>
                <p class="text-gray-600">Rank: {{ $keyword->ranking ?? 'N/A' }}</p>
            </div>
        @endforeach
    </div>
@endsection
