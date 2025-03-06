@extends('layouts.layout')

@section('title', 'Your Projects')

@section('content')
    <a href="{{ route('projects.create') }}" class="bg-blue-500 text-white px-4 py-2 rounded">Create New Project</a>
    
    <div class="mt-5">
        @foreach($projects as $project)
            <div class="bg-white p-4 rounded shadow mb-4">
                <h2 class="text-xl font-bold">{{ $project->name }}</h2>
                <p class="text-gray-600">{{ $project->url }}</p>
                <a href="{{ route('projects.show', $project) }}" class="text-blue-500">View Keywords</a>
            </div>
        @endforeach
    </div>
@endsection
