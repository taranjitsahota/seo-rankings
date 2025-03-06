@extends('layouts.layout')

@section('title', 'Add Keyword')

@section('content')
    <h2 class="text-xl font-bold">Add Keyword to {{ $project->name }}</h2>

    <form action="{{ route('projects.keywords.store', $project) }}" method="POST" class="bg-white p-6 rounded shadow">
        @csrf
        <label class="block mb-2">Keyword</label>
        <input type="text" name="keyword" class="border w-full p-2 mb-4" required>

        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Add Keyword</button>
    </form>
@endsection
