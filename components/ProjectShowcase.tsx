'use client'
import { useState } from 'react'
import Image from 'next/image'

const projects = [
    { id: 1, name: 'Tool 1', description: 'Description of Tool 1', image: '/placeholder.svg' },
    { id: 2, name: 'Tool 2', description: 'Description of Tool 2', image: '/placeholder.svg' },
    { id: 3, name: 'Tool 3', description: 'Description of Tool 3', image: '/placeholder.svg' },
    { id: 4, name: 'Tool 4', description: 'Description of Tool 4', image: '/placeholder.svg' },
]

export default function ProjectShowcase() {
    const [activeProject, setActiveProject] = useState(projects[0])

    return (
        <section id="projects" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Web Tools</h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
                    <div className="w-full md:w-1/2">
                        <Image
                            key={activeProject.id}
                            src={activeProject.image}
                            alt={activeProject.name}
                            width={600}
                            height={400}
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3
                            key={activeProject.id + '-name'}
                            className="text-2xl font-semibold"
                        >
                            {activeProject.name}
                        </h3>
                        <p
                            key={activeProject.id + '-description'}
                            className="text-gray-600"
                        >
                            {activeProject.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    className={`px-4 py-2 rounded-full ${activeProject.id === project.id
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                        } transition duration-300`}
                                    onClick={() => setActiveProject(project)}
                                >
                                    {project.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}