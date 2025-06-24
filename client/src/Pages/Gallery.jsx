import React, { useState } from 'react';
useState
const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    const galleryImages = [
        {
            id: 1,
            src: "https://scontent.fbho3-5.fna.fbcdn.net/v/t39.30808-6/480708495_1038173468331156_3826166312289154721_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=adj5hWF1tUEQ7kNvwGC0LsC&_nc_oc=AdlL6XMrLQGa33t7k2o33SfjlBBvAa3Ws8YH5rPdo4IcqKKsREijfaBL7yn5ChPS87Q&_nc_zt=23&_nc_ht=scontent.fbho3-5.fna&_nc_gid=FElNmwUbHGAzURYu6BZV-Q&oh=00_AfOsYI_CUGvU0XfAC0zy3nz2kMHI43tk2vGUwGyAStGTVA&oe=685F017F",
            alt: "Children playing in classroom",
            category: "Class Activities"
        },
        {
            id: 2,
            src: "https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/481256682_1038172394997930_3227919130437684998_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cF_AxBr9hgsQ7kNvwHgeRet&_nc_oc=Adn-i4CMSONA02oaYzthf7trrWBUvjLWAWi2QTT86uwkzfM1zeM_EPQyp9Gv4UJeWBM&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=bfdi9fDz0osbIXmfS5BPMw&oh=00_AfOoPyyjzo6HZT_M-4MwG9BpQ6p6bNLA_tXrBptS4T2pOA&oe=685EDC7C",
            alt: "Art class",
            category: "Creative Arts"
        },
        {
            id: 3,
            src: "https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/481168707_1038173401664496_8287176664494290609_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gQ_iTZFhpPIQ7kNvwGsHGL9&_nc_oc=AdlEdZts6mc5RFcMFMWb7NddnsYCrshj7bvT28Yf_rf54CQryDoIeq17xv6apIXqD3w&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=QK_3OjsKRUsYmPfKoZYNsQ&oh=00_AfNR9sHbcMrLFdwHgO5CcVfG3DofnfSOi8eS8qn09a87Jg&oe=685EF786",
            alt: "Outdoor play",
            category: "Outdoor Learning"
        },
        {
            id: 4,
            src: "https://scontent.fbho3-4.fna.fbcdn.net/v/t39.30808-6/480693175_1037560835059086_5192805498507853564_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=AAlH9SAF1yYQ7kNvwGKcem5&_nc_oc=AdmIZ-35IXL1qkGLktNwrpinPbW8MaP4mOtCrJIfP82Ls3k_OFQXIkGJxWAU2p2U_JA&_nc_zt=23&_nc_ht=scontent.fbho3-4.fna&_nc_gid=8kswo6X033gukbTs_OO-LA&oh=00_AfP_mBJfKfliihAjUDau_ozMvbYRq-psPNd2nZbezuMHKw&oe=685F0723",
            alt: "Story time",
            category: "Storytelling"
        },
        {
            id: 5,
            src: "https://scontent.fbho3-1.fna.fbcdn.net/v/t39.30808-6/481259860_1037560841725752_1658660790101127705_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=h5gQ1iETQVMQ7kNvwEaN5XS&_nc_oc=AdnmH7wkpGI1foq6MbrEk6iZU1e6p7w1phBpoHSvLDlMxf0OOU2Pl5ihbicfdRzZiJA&_nc_zt=23&_nc_ht=scontent.fbho3-1.fna&_nc_gid=dm5Kz64dj64-k_tgerf_OA&oh=00_AfOBB4Ti6WK8hXrWbYfml-FeGGirpZoQRsxZaIqcik-TZA&oe=685EFF9F",
            alt: "Science experiment",
            category: "STEM Learning"
        },
        {
            id: 6,
            src: "https://scontent.fbho3-5.fna.fbcdn.net/v/t39.30808-6/480695835_1038172381664598_498833939751543738_n.jpg?stp=c342.0.1365.1365a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=7W6OQYU1H0cQ7kNvwExb9Xg&_nc_oc=AdnGuL-_MibHP-8q-QULvk997nxuvA3kygQJTm841dKrBXGW4mCl0evHskOCJbGMHRc&_nc_zt=23&_nc_ht=scontent.fbho3-5.fna&_nc_gid=JMbkuujlAhS24JIRZjHRmQ&oh=00_AfPj7GhnWeDdsL5AGWlvJQbIOomoakdHRZlz7ZQtwpWD8g&oe=685EE90F",
            alt: "Music class",
            category: "Music & Movement"
        },
      
        {
    id: 7,
    src: "https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/480693727_1037576498390853_2834532372459502731_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8M0tAAwpibQQ7kNvwFg-10S&_nc_oc=Adn0-P4p9W-Dp-IjLc_VA0v7l90nK3rSv941ZPjlpCEWfYhiQDtNnIacafbE_m2-jI0&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=0gpgioTLg2D6o8rEFLCbRw&oh=00_AfPBj4KgsuxLm_rOq2JUGf9522PTlCkHWfL7ZS3NuWvITQ&oe=685EFD01",
    alt: "Toddlers playing with water toys",
    category: "Sensory Play"
},
{
    id:8,
    src: "https://scontent.fbho3-2.fna.fbcdn.net/v/t39.30808-6/481075578_1038172278331275_4392378499825543040_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9YspZSvz9w8Q7kNvwHIYmq7&_nc_oc=AdlM1WTCC09s-B3egCbu30urvQDL1C4pWS6t3ZiS4vG1adJnMytBkOUmCZOGbgvK9qo&_nc_zt=23&_nc_ht=scontent.fbho3-2.fna&_nc_gid=lFi8Euzg7z3bbawTssAFiw&oh=00_AfNdaY8ZzvKhfoQk77QeaJkgrQc9g6FlJBKIqwfF-fOa4Q&oe=685EF9A0",
    alt: "Preschoolers doing yoga poses",
    category: "Physical Development"
},
{
    id: 9,
    src: "https://scontent.fjlr2-1.fna.fbcdn.net/v/t39.30808-6/480685856_1038172288331274_4721845703052119540_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=A-JBdnw_YH8Q7kNvwH8kusx&_nc_oc=AdlTpsla796bX9nfuDl3UfN2B_rFT3f7ww6NYSWD9t5bANs2R6-VSCG92fBVVxhtdrj7nx5VkuYM7UfcG7bQDivo&_nc_zt=23&_nc_ht=scontent.fjlr2-1.fna&_nc_gid=85DvPNF9hswMvbbFJf7uAA&oh=00_AfNifeczVdRK4d0FvHW4di96d-PSGeHCKHtIZysuHJeakg&oe=685EDA13",
    alt: "Children gardening and planting seeds",
    category: "Nature Learning"
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

                    <div className='mb-4 text-center'>
                        <p>
    📸 <strong>Send us a friend request on our{" "}
    <a
      href="https://facebook.com/your-page-link"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary"
    >
      Facebook account
    </a>{" "}
    and download required pictures.</strong>
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