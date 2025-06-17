import React, { useState } from 'react';
useState
const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    const galleryImages = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Children playing in classroom",
            category: "Class Activities"
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1541692641319-981cc79ee10a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Art class",
            category: "Creative Arts"
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Outdoor play",
            category: "Outdoor Learning"
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Story time",
            category: "Storytelling"
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Science experiment",
            category: "STEM Learning"
        },
        {
            id: 6,
            src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Music class",
            category: "Music & Movement"
        },
        {
            id: 7,
            src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Story time",
            category: "Storytelling"
        },
        {
            id: 8,
            src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Science experiment",
            category: "STEM Learning"
        },
        {
            id: 9,
            src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Music class",
            category: "Music & Movement"
        }

    ];

    const imagesToShow = showAll ? galleryImages : galleryImages.slice(0, 6);

    return (
        <div className="relative bg-white overflow-hidden">
            {/* Large Banner Image with Gallery Text */}
            <div className="relative h-96 w-full">
                <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Happy preschool children"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">GALLERY</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                {/* Decorative elements matching PreschoolPrograms */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-[#E91E63]">Precious Moments</span>
                        </h2>
                        <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Capturing the joy, learning and growth of our little stars
                        </p>
                    </div>

                    {/* Gallery grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {imagesToShow.map((image) => (
                            <div
                                key={image.id}
                                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image with overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                {/* Category label */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 flex items-center justify-center bg-[#E91E63] rounded-full mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-lg">{image.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View more button */}
                    <div className="text-center mt-12">
                        {!showAll && (

                            <button onClick={() => setShowAll(true)} className="px-8 py-3   bg-gradient-to-r from-[#0f172a] to-[#1e3a8a]  text-white font-semibold rounded-full hover:bg-[#d11f3a] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center mx-auto">
                                  {showAll ? 'Show Less' : 'Show More'}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;