import React from 'react';
import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';

const BlogsPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Play in Early Childhood Development",
      excerpt: "Discover how play-based learning enhances cognitive, social, and emotional growth in preschoolers.",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 15, 2023",
      author: "Dr. Priya Sharma",
      comments: 8,
      category: "Child Development"
    },
    {
      id: 2,
      title: "10 Creative Art Activities for Toddlers at Home",
      excerpt: "Simple yet engaging art projects you can do with everyday household items to boost creativity.",
      image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 28, 2023",
      author: "Ananya Gupta",
      comments: 12,
      category: "Activities"
    },
    {
      id: 3,
      title: "Preparing Your Child for Preschool: A Parent's Guide",
      excerpt: "Practical tips to make the transition to preschool smooth for both children and parents.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "April 10, 2023",
      author: "Rahul Mehta",
      comments: 15,
      category: "Parenting"
    },
    {
      id: 4,
      title: "The Science Behind Early Literacy Skills",
      excerpt: "How reading to young children shapes their brain development and future academic success.",
      image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "March 22, 2023",
      author: "Dr. Neha Kapoor",
      comments: 6,
      category: "Education"
    },
    {
      id: 5,
      title: "Healthy Snack Ideas for Growing Preschoolers",
      excerpt: "Nutritious and kid-approved snack recipes that support your child's growth and energy needs.",
      image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "February 18, 2023",
      author: "Shweta Patel",
      comments: 10,
      category: "Nutrition"
    },
    {
      id: 6,
      title: "Outdoor Learning: Taking Education Beyond Classroom Walls",
      excerpt: "How nature-based activities enhance learning experiences for young children.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "January 5, 2023",
      author: "Arjun Singh",
      comments: 7,
      category: "Learning Methods"
    }
  ];

  const categories = [
    "Child Development",
    "Parenting",
    "Activities",
    "Nutrition",
    "Education",
    "Learning Methods"
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Hero Banner */}
      <div className="relative h-96 w-full">
        <img 
          src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Children reading books"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">Our Blog</h1>
            <p className="text-xl text-white max-w-2xl mx-auto">Insights, tips and resources for early childhood education</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="mb-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                  <div className="h-64 md:h-80 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                      alt="Featured blog post"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="inline-block px-3 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-xs font-medium mb-3">
                      Featured
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      The Magic of Storytelling in Early Education
                    </h2>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center mr-4 mb-2">
                        <FaCalendarAlt className="mr-1" /> June 30, 2023
                      </span>
                      <span className="flex items-center mr-4 mb-2">
                        <FaUser className="mr-1" /> By Dr. Anjali Desai
                      </span>
                      <span className="flex items-center mb-2">
                        <FaComment className="mr-1" /> 14 Comments
                      </span>
                    </div>
                    <p className="text-gray-700 mb-5">
                      Discover how storytelling enhances language development, creativity, and emotional intelligence in preschoolers, with practical tips for parents and educators.
                    </p>
                    <button className="flex items-center text-[#E91E63] font-semibold hover:underline">
                      Read More <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-xs font-medium mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                      <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3">
                        <span className="flex items-center mr-3 mb-1">
                          <FaCalendarAlt className="mr-1" /> {post.date}
                        </span>
                        <span className="flex items-center mr-3 mb-1">
                          <FaUser className="mr-1" /> {post.author}
                        </span>
                        <span className="flex items-center mb-1">
                          <FaComment className="mr-1" /> {post.comments}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
                      <button className="flex items-center text-[#E91E63] text-sm font-semibold hover:underline">
                        Read More <FaArrowRight className="ml-1 text-xs" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-1 rounded-md bg-[#E91E63] text-white">1</button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">2</button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">3</button>
                  <button className="px-3 py-1 rounded-md hover:bg-gray-100">Next</button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]/50"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#E91E63]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#E91E63]">
                        <span>{category}</span>
                        <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">12</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <a href="#" className="text-sm font-medium text-gray-900 hover:text-[#E91E63] line-clamp-2">
                          {post.title}
                        </a>
                        <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;