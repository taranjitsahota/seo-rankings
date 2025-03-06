import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState,useEffect } from "react";

export default function Projects({ auth, projects }) {
    const [toastMessage, setToastMessage] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const projectForm = useForm({
        name: "",
        url: "",
    });

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        projectForm.post(route("projects.store"), {
            onSuccess: () => projectForm.reset(),
        });
    };

    const keywordForm = useForm({
        keyword: "",
    });

    const handleKeywordSubmit = (e) => {
        e.preventDefault();
        if (!selectedProject) return;
        keywordForm.post(
            route("projects.keywords.store", { project: selectedProject.id }),
            {
                onSuccess: () => {
                    keywordForm.reset();
                    setIsModalOpen(false);
                },
            }
        );
    };

    const openKeywordModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState(null);

    const confirmDeleteProject = (project) => {
        setProjectToDelete(project);
        setDeleteModalOpen(true);
    };
    const handleDeleteProject = () => {
        if (!projectToDelete) return;
    
        projectForm.delete(route("projects.destroy", { project: projectToDelete.id }), {
            onSuccess: () => {
                setDeleteModalOpen(false);
                setToastMessage("Project deleted successfully!");
                setTimeout(() => setToastMessage(""), 3000); // Auto-close toast
            },
        });
    };
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white p-6 rounded shadow">
                        <h3 className="text-lg font-semibold mb-4">
                            Create a New Project
                        </h3>
                        <form onSubmit={handleProjectSubmit}>
                            <label className="block mb-2">Project Name</label>
                            <input
                                type="text"
                                name="name"
                                value={projectForm.data.name}
                                onChange={(e) =>
                                    projectForm.setData("name", e.target.value)
                                }
                                className="border w-full p-2 mb-4"
                                required
                            />
                            {projectForm.errors.name && (
                                <p className="text-red-500 text-sm">
                                    {projectForm.errors.name}
                                </p>
                            )}

                            <label className="block mb-2">Project URL</label>
                            <input
                                type="url"
                                name="url"
                                value={projectForm.data.url}
                                onChange={(e) =>
                                    projectForm.setData("url", e.target.value)
                                }
                                className="border w-full p-2 mb-4"
                                required
                            />
                            {projectForm.errors.url && (
                                <p className="text-red-500 text-sm">
                                    {projectForm.errors.url}
                                </p>
                            )}

                            <button
                                type="submit"
                                className="bg-green-500 text-white px-4 py-2 rounded"
                                disabled={projectForm.processing}
                            >
                                {projectForm.processing
                                    ? "Creating..."
                                    : "Create"}
                            </button>
                        </form>
                    </div>

                    <div className="bg-white p-6 rounded shadow mt-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Project List
                        </h3>
                        {projects.length > 0 ? (
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-gray-300 px-4 py-2">
                                            Name
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            URL
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            Keywords
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {projects.map((project) => (
                                        <tr
                                            key={project.id}
                                            className="text-center"
                                        >
                                            <td className="border border-gray-300 px-4 py-2">
                                                {project.name}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <a
                                                    href={project.url}
                                                    className="text-blue-500"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {project.url}
                                                </a>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {project.keywords &&
                                                project.keywords.length > 0 ? (
                                                    <ul>
                                                        {project.keywords.map(
                                                            (keyword) => (
                                                                <li
                                                                    key={
                                                                        keyword.id
                                                                    }
                                                                    className="text-gray-700"
                                                                >
                                                                    {
                                                                        keyword.keyword
                                                                    }
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-500">
                                                        No keywords
                                                    </p>
                                                )}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <button
                                                    onClick={() =>
                                                        openKeywordModal(
                                                            project
                                                        )
                                                    }
                                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                                >
                                                    Add Keyword
                                                </button>

                                                <button
                                                    onClick={() =>
                                                        confirmDeleteProject(
                                                            project
                                                        )
                                                    }
                                                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                </div>
            </div>

            {deleteModalOpen && projectToDelete && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Are you sure you want to delete{" "}
                <span className="text-red-500">{projectToDelete.name}</span>?
            </h3>
            <div className="flex justify-end space-x-2">
                <button
                    onClick={() => setDeleteModalOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Cancel
                </button>
                <button
                    onClick={handleDeleteProject}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                >
                    Yes, Delete
                </button>
            </div>
        </div>
    </div>
)}


            {toastMessage && (
                <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-500">
                    {toastMessage}
                </div>
            )}

            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-lg font-semibold mb-4">
                            Add Keyword to {selectedProject.name}
                        </h3>
                        <form onSubmit={handleKeywordSubmit}>
                            <label className="block mb-2">Keyword</label>
                            <input
                                type="text"
                                name="keyword"
                                value={keywordForm.data.keyword}
                                onChange={(e) =>
                                    keywordForm.setData(
                                        "keyword",
                                        e.target.value
                                    )
                                }
                                className="border w-full p-2 mb-4"
                                required
                            />
                            {keywordForm.errors.keyword && (
                                <p className="text-red-500 text-sm">
                                    {keywordForm.errors.keyword}
                                </p>
                            )}

                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white px-4 py-2 rounded"
                                    disabled={keywordForm.processing}
                                >
                                    {keywordForm.processing
                                        ? "Adding..."
                                        : "Add Keyword"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
