import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Keywords({ auth,projects }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Keywords
                </h2>
            }
        >
            <Head title="Keywords" />

            <div className="p-6 bg-white rounded shadow">
                <h2 className="text-xl font-bold mb-4">All Keywords</h2>
                {projects.map((project) => (
                    <div key={project.id} className="border p-4 mb-4 rounded">
                        <h3 className="font-semibold">{project.name}</h3>
                        <ul className="list-disc pl-6">
                            {project.keywords.map((k) => (
                                <li key={k.id}>{k.keyword}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </AuthenticatedLayout>
    );
}
