import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import ChartComponent from "@/components/ChartComponent"; // If you have aliasing set up in Vite

export default function Dashboard({ auth,projects }) {

    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded shadow mt-6">
                        <h3 className="text-lg font-semibold mb-4">Project List</h3>
                        {projects.length > 0 ? (
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2">Name</th>
                                        <th className="border border-gray-300 px-4 py-2">URL</th>
                                        <th className="border border-gray-300 px-4 py-2">Keywords</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project) => (
                                        <tr key={project.id} className="text-center">
                                            <td className="border border-gray-300 px-4 py-2">{project.name}</td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <a href={project.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                                                    {project.url}
                                                </a>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {project.keywords && project.keywords.length > 0 ? (
                                                    <ul>
                                                        {project.keywords.map((keyword) => (
                                                            <li key={keyword.id} className="text-gray-700">{keyword.keyword}</li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-500">No keywords</p>
                                                )}
                                            </td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Keyword Rankings</h1>
                    <ChartComponent />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
