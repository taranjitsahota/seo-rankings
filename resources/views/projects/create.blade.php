@extends('layouts.layout')

@section('title', 'Create Project')

@section('content')
    <form action="{{ route('projects.store') }}" method="POST" class="bg-white p-6 rounded shadow">
        @csrf
        <label class="block mb-2">Project Name</label>
        <input type="text" name="name" class="border w-full p-2 mb-4" required>

        <label class="block mb-2">Project URL</label>
        <input type="text" name="url" class="border w-full p-2 mb-4" required>

        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
    </form>
@endsection
