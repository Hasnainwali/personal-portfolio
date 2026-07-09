import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../constants'
import SEO from '../components/Seo'
import { ImageOptimizer } from '../utils/imageOptimizer'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = projects.find(p => String(p.id) === String(id))

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Project not found</h2>
                    <Link to="/" className="text-blue-500 underline mt-4 block">Back to home</Link>
                </div>
            </div>
        )
    }

    const projectData = {
        name: project.name,
        description: project.description,
        image: project.image || project.bgImage,
        url: project.online || project.href,
        dateCreated: project.dateCreated || project.date || null,
        technologies: project.frameworks?.map(f => f.name) || [],
        rating: project.rating || null,
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
            <SEO
                title={`${project.name} — Project`}
                description={project.description}
                image={projectData.image}
                url={`https://hasnainwali-official.vercel.app/projects/${project.id}`}
                projectData={projectData}
            />

            <div className="max-w-5xl mx-auto">
                <Link to="/" className="text-sm text-gray-600 hover:text-black">← Back</Link>

                <h1 className="mt-4 text-3xl md:text-5xl font-bold">{project.name}</h1>
                <p className="mt-4 text-gray-700 leading-relaxed">{project.caseStudy || project.description}</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <div className="rounded overflow-hidden shadow-lg">
                            <ImageOptimizer src={projectData.image} alt={project.name} className="w-full h-auto object-cover" priority={true} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Details</h3>
                        <ul className="mt-4 space-y-2 text-gray-700">
                            <li><strong>Live:</strong> {project.online ? (<a href={project.online} target="_blank" rel="noreferrer" className="text-blue-600 underline">Visit</a>) : 'N/A'}</li>
                            <li><strong>Repo:</strong> {project.href ? (<a href={project.href} target="_blank" rel="noreferrer" className="text-blue-600 underline">Source</a>) : 'N/A'}</li>
                            <li><strong>Technologies:</strong> {projectData.technologies.join(', ')}</li>
                            {project.team && <li><strong>Team:</strong> {project.team}</li>}
                        </ul>

                        {project.caseStudy && (
                            <div className="mt-6">
                                <h4 className="font-semibold">Case Study</h4>
                                <p className="mt-2 text-gray-700">{project.caseStudy}</p>
                            </div>
                        )}

                        <div className="mt-6">
                            <Link to="/" className="inline-block bg-black text-white px-4 py-2 rounded">Back to portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProjectDetails
