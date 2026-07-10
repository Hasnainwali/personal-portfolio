import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { servicesData } from '../constants/index.js'
import SEO from '../components/Seo'

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const ServiceDetails = () => {
    const { slug } = useParams()
    const service = servicesData.find(s => slugify(s.title) === slug)

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Service not found</h2>
                    <Link to="/" className="text-blue-500 underline mt-4 block">Back to home</Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
            <SEO
                title={`${service.title} — Service`}
                description={service.description}
                image="/images/hasnain.webp"
                url={`https://hasnainwali-official.vercel.app/services/${slug}`}
            />

            <div className="max-w-4xl mx-auto">
                <Link to="/" className="text-sm text-gray-600 hover:text-black">← Back</Link>

                <h1 className="mt-4 text-3xl md:text-4xl font-bold">{service.title}</h1>
                <p className="mt-4 text-gray-700 leading-relaxed">{service.description}</p>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold">What I deliver</h3>
                    <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.items.map((it, idx) => (
                            <li key={idx} className="p-4 border rounded">
                                <h4 className="font-semibold">{it.title}</h4>
                                <p className="text-gray-700">{it.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold">Ready to start?</h3>
                    <p className="mt-2 text-gray-700">Contact me to discuss your project and get a fixed estimate.</p>
                    <Link to="/" className="inline-block mt-4 bg-black text-white px-4 py-2 rounded">Contact</Link>
                </div>
            </div>
        </main>
    )
}

export default ServiceDetails
