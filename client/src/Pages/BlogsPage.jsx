// import React from 'react';
// import { FaCalendarAlt, FaUser, FaComment, FaArrowRight } from 'react-icons/fa';

// const BlogsPage = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "The Importance of Play in Early Childhood Development",
//       excerpt: "Discover how play-based learning enhances cognitive, social, and emotional growth in preschoolers.",
//       image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "June 15, 2023",
//       author: "Dr. Priya Sharma",
//       comments: 8,
//       category: "Child Development"
//     },
//     {
//       id: 2,
//       title: "10 Creative Art Activities for Toddlers at Home",
//       excerpt: "Simple yet engaging art projects you can do with everyday household items to boost creativity.",
//       image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "May 28, 2023",
//       author: "Ananya Gupta",
//       comments: 12,
//       category: "Activities"
//     },
//     {
//       id: 3,
//       title: "Preparing Your Child for Preschool: A Parent's Guide",
//       excerpt: "Practical tips to make the transition to preschool smooth for both children and parents.",
//       image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "April 10, 2023",
//       author: "Rahul Mehta",
//       comments: 15,
//       category: "Parenting"
//     },
//     {
//       id: 4,
//       title: "The Science Behind Early Literacy Skills",
//       excerpt: "How reading to young children shapes their brain development and future academic success.",
//       image: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "March 22, 2023",
//       author: "Dr. Neha Kapoor",
//       comments: 6,
//       category: "Education"
//     },
//     {
//       id: 5,
//       title: "Healthy Snack Ideas for Growing Preschoolers",
//       excerpt: "Nutritious and kid-approved snack recipes that support your child's growth and energy needs.",
//       image: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "February 18, 2023",
//       author: "Shweta Patel",
//       comments: 10,
//       category: "Nutrition"
//     },
//     {
//       id: 6,
//       title: "Outdoor Learning: Taking Education Beyond Classroom Walls",
//       excerpt: "How nature-based activities enhance learning experiences for young children.",
//       image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       date: "January 5, 2023",
//       author: "Arjun Singh",
//       comments: 7,
//       category: "Learning Methods"
//     }
//   ];

//   const categories = [
//     "Child Development",
//     "Parenting",
//     "Activities",
//     "Nutrition",
//     "Education",
//     "Learning Methods"
//   ];

//   return (
//     <div className="relative bg-white overflow-hidden">
//       {/* Hero Banner */}
//       <div className="relative h-96 w-full">
//         <img
//           src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="Children reading books"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">Our Blog</h1>
//             <p className="text-xl text-white max-w-2xl mx-auto">Insights, tips and resources for early childhood education</p>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="relative py-16 px-4 sm:px-6 lg:px-8">
//         {/* Decorative elements */}
//         <div className="absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//         <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Main Content Area */}
//             <div className="lg:col-span-3">
//               {/* Featured Post */}
//               <div className="mb-16">
//                 <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
//                   <div className="h-64 md:h-80 overflow-hidden">
//                     <img
//                       src="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                       alt="Featured blog post"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="p-6 md:p-8">
//                     <span className="inline-block px-3 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-xs font-medium mb-3">
//                       Featured
//                     </span>
//                     <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
//                       The Magic of Storytelling in Early Education
//                     </h2>
//                     <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4">
//                       <span className="flex items-center mr-4 mb-2">
//                         <FaCalendarAlt className="mr-1" /> June 30, 2023
//                       </span>
//                       <span className="flex items-center mr-4 mb-2">
//                         <FaUser className="mr-1" /> By Dr. Anjali Desai
//                       </span>
//                       <span className="flex items-center mb-2">
//                         <FaComment className="mr-1" /> 14 Comments
//                       </span>
//                     </div>
//                     <p className="text-gray-700 mb-5">
//                       Discover how storytelling enhances language development, creativity, and emotional intelligence in preschoolers, with practical tips for parents and educators.
//                     </p>
//                     <button className="flex items-center text-[#E91E63] font-semibold hover:underline">
//                       Read More <FaArrowRight className="ml-2" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Blog Posts Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                 {blogPosts.map((post) => (
//                   <div key={post.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
//                     <div className="h-48 overflow-hidden">
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                       />
//                     </div>
//                     <div className="p-6">
//                       <span className="inline-block px-2 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-xs font-medium mb-3">
//                         {post.category}
//                       </span>
//                       <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
//                       <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3">
//                         <span className="flex items-center mr-3 mb-1">
//                           <FaCalendarAlt className="mr-1" /> {post.date}
//                         </span>
//                         <span className="flex items-center mr-3 mb-1">
//                           <FaUser className="mr-1" /> {post.author}
//                         </span>
//                         <span className="flex items-center mb-1">
//                           <FaComment className="mr-1" /> {post.comments}
//                         </span>
//                       </div>
//                       <p className="text-gray-700 text-sm mb-4">{post.excerpt}</p>
//                       <button className="flex items-center text-[#E91E63] text-sm font-semibold hover:underline">
//                         Read More <FaArrowRight className="ml-1 text-xs" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="flex justify-center">
//                 <nav className="flex items-center space-x-2">
//                   <button className="px-3 py-1 rounded-md bg-[#E91E63] text-white">1</button>
//                   <button className="px-3 py-1 rounded-md hover:bg-gray-100">2</button>
//                   <button className="px-3 py-1 rounded-md hover:bg-gray-100">3</button>
//                   <button className="px-3 py-1 rounded-md hover:bg-gray-100">Next</button>
//                 </nav>
//               </div>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               {/* Search */}
//               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search articles..."
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]/50"
//                   />
//                   <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#E91E63]">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>

//               {/* Categories */}
//               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
//                 <ul className="space-y-2">
//                   {categories.map((category, index) => (
//                     <li key={index}>
//                       <a href="#" className="flex items-center justify-between text-gray-700 hover:text-[#E91E63]">
//                         <span>{category}</span>
//                         <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">12</span>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Recent Posts */}
//               <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
//                 <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
//                 <div className="space-y-4">
//                   {blogPosts.slice(0, 3).map((post) => (
//                     <div key={post.id} className="flex items-start space-x-3">
//                       <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-md">
//                         <img
//                           src={post.image}
//                           alt={post.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div>
//                         <a href="#" className="text-sm font-medium text-gray-900 hover:text-[#E91E63] line-clamp-2">
//                           {post.title}
//                         </a>
//                         <p className="text-xs text-gray-500 mt-1">{post.date}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;

import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaComment,
  FaArrowRight,
  FaChild,
  FaPencilAlt,
  FaFileDownload,
  FaHome,
} from "react-icons/fa";
import blog1 from "../assets/blog/blog1.png";
import blog2 from "../assets/blog/blog2.png";
import blog3 from "../assets/blog/blog3.png";
import blog4 from "../assets/blog/blog4.png";
import blog5 from "../assets/blog/blog5.png";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Why the BunnyLearn Curriculum is Celebrated Worldwide for Nurturing Young Minds",
      author: "Published by BunnyTots International Preschool",
      category: "Educational",
      date: "July 17, 2023",
      image: blog1,
      content: `




🌍 Why the BunnyLearn Curriculum is Celebrated Worldwide for Nurturing Young Minds

At BunnyTots International Preschool, we believe that early childhood is the most crucial stage in shaping a child's personality, intelligence, and emotional wellbeing. That’s why our proprietary BunnyLearn Curriculum has become a trusted name across the globe, recognized for its balanced, research-backed approach to early education.

🐰 What is the BunnyLearn Curriculum?

The BunnyLearn Curriculum is a unique blend of global best practices in early childhood education, customized for young learners aged 1.5 to 6 years. It integrates multiple learning philosophies—including Montessori, Reggio Emilia, Play-Based Learning, and STEAM education—into a cohesive framework designed to promote well-rounded or overall development of young kids.

Rather than focusing on rote learning or academic pressure, BunnyLearn encourages curiosity, creativity, emotional intelligence, and social and self confidence—skills that are essential not only in school but in life.


🌟 Key Features of the BunnyLearn Curriculum

1. Holistic Development

Children are guided through age-appropriate activities that develop their cognitive, physical, emotional, and social skills. Every child is nurtured as an individual, not just a student.

2. Play with Purpose

We believe that play is the most natural way for children to learn. Our curriculum turns everyday play into meaningful learning experiences, sparking curiosity and critical thinking.

3. Global Standards, Local Values

While BunnyLearn incorporates international methodologies, it also embraces cultural diversity and local values, ensuring children stay rooted even as they soar.

4. 21st Century Skills

Through collaborative tasks, creative expression, and guided exploration, children develop communication skills, problem-solving abilities, empathy, and adaptability—essential for tomorrow’s world.

5. Parent Involvement

We consider parents as our partners in education. Regular updates, parent-child activities, and open communication channels ensure that learning extends from the classroom to the home.



🌐 A Curriculum Trusted Worldwide

From Singapore to India, BunnyLearn has captured the hearts of educators and parents alike. It’s more than just a curriculum—it’s a philosophy of joyful learning. BunnyLearn-trained children are often described as confident, articulate, socially aware, and emotionally secure—traits that give them a head start in both academics and life.


🏫 Why Choose BunnyTots?

At BunnyTots, we don’t just teach—we nurture, inspire, and empower. The BunnyLearn Curriculum is the foundation of our success, and it’s what sets our preschool apart. If you’re looking for an environment where your child will be loved, challenged, and celebrated, BunnyTots is the place to be.




📅 Admissions Open!
Visit your nearest BunnyTots International Preschool center or call us to know more about how the BunnyLearn Curriculum can shape your child's future.
      `,
    },
    {
      id: 2,
      title:
        "Why Holistic Development in Early Childhood is Essential — and How BunnyTots is Leading the Way ",
      author: "By Abhishek Patil",
      category: "Parent Review",
      date: "November 7,  2024",
      image: blog2,
      content: `


In today’s fast-evolving world, academic achievement alone is no longer a sufficient marker of a child’s success. More than ever, we need to focus on nurturing well-rounded individuals—emotionally intelligent, socially aware, physically active, and creatively expressive. This is where holistic development comes into play, especially during the early years when children are most receptive to learning.

As a writer who has spent years researching early education trends, I’ve observed that institutions often emphasize either academics or activities, but seldom both with equal dedication. BunnyTots International Preschool stands apart by offering a well-balanced, holistic approach that caters to every dimension of a child’s growth.

What is Holistic Development?

Holistic development refers to an educational philosophy that recognizes the importance of nurturing a child across five core domains:

Cognitive (thinking and reasoning)

Emotional (self-awareness and empathy)

Social (communication and collaboration)

Physical (motor skills and health)

Creative (imagination and self-expression)


This integrated approach ensures that no aspect of a child's growth is neglected. It also aligns closely with global early childhood education standards.

BunnyTots: A Preschool with Purpose

What impressed me most during my visit to BunnyTots was the intentional design behind every activity, learning space, and interaction. The school doesn't just focus on worksheets and milestones—it focuses on the child.

Here’s how BunnyTots implements holistic development:

1. Play-Based Learning

Children learn best when they play. BunnyTots uses structured and free play to build cognitive skills, problem-solving abilities, and social bonds. The learning materials are age-appropriate, stimulating curiosity and creativity at every turn.

2. Emotional Intelligence Building

Through storytelling, guided reflection, and mindful activities, children are encouraged to express their feelings and develop empathy—skills that form the bedrock of strong relationships and mental well-being.

3. Physical Wellness

Outdoor play, yoga, and rhythmic movement are integrated into the daily routine. These help improve motor skills, balance, and overall fitness—making sure children are not just smart, but strong and active.

4. Creative Expression

Whether it’s music, dance, painting, or drama, BunnyTots gives children multiple outlets to explore their imagination. This not only boosts confidence but also lays the groundwork for innovation later in life.

5. Values and Social Skills

Team activities, cultural celebrations, and group storytelling help develop a sense of community, respect, and shared responsibility—skills vital in today’s interconnected world.

Final Thoughts

Early childhood is a time of wonder, exploration, and rapid growth. By fostering every aspect of a child's development, we give them the tools to thrive—not just in school, but in life. BunnyTots International Preschool understands this deeply, and it shows in every corner of their classrooms and every smile on their students' faces.

If you're a parent seeking more than just a traditional preschool experience—one that genuinely prioritizes your child's all-round development—BunnyTots might just be the nurturing space you've been looking for.
      `,
    },

    {
      id: 3,
      title: "Help Your Child Sleep Well for Better Health and Prosperity",
      author: " Arvind Rao",
      category: "Parent Review",
      image: blog3,
      date: "Date: November 5,  2024",
      content: `
   

As parents, we often focus on nutrition, education, and activities to ensure our children grow up healthy and successful. But one essential ingredient for a child’s well-being is often overlooked—quality sleep. A good night’s rest is not just about preventing crankiness; it’s a powerful tool that supports your child’s health, emotional balance, brain development, and even future prosperity.

Why Sleep Matters for Children

Sleep is when a child’s body and brain recharge. During deep sleep, growth hormones are released, the immune system strengthens, and the brain processes the learning and experiences of the day. Lack of sleep, on the other hand, can affect attention span, memory, mood, and overall development.

Benefits of Good Sleep:

Boosts Brain Power: Sleep enhances memory, focus, and learning.

Supports Physical Growth: Growth hormones are released during deep sleep.

Builds Immunity: Rest strengthens the body’s defenses.

Improves Mood and Behavior: Sleep helps regulate emotions and behavior.

Sets the Stage for Future Success: Healthy sleep builds the foundation for overall well-being and prosperity.




Tips to Promote Better Sleep

1. Stick to a Routine: Regular sleep and wake times create stability.


2. Create a Calm Bedtime Ritual: Include a bath, story, or gentle lullaby.


3. Limit Screens Before Bed: Keep screens off at least 1 hour before bedtime.


4. Design a Sleep-Friendly Room: Quiet, cool, and dark rooms help children sleep better.


5. Monitor Diet and Activity: Avoid sugar and heavy meals before bed; encourage active play during the day.

Recommended Sleep by Age



🛌 Printable Weekly Sleep Chart for Parents

Use this simple chart to track your child’s bedtime, wake-up time, and total hours of sleep each day. Print it out and stick it on the fridge or bedroom wall!

✅ Tip: Try using stickers or smiley faces to motivate younger kids to stick to their bedtime!



Final Thought

A well-rested child is a happy, healthy, and thriving child. By making sleep a priority, you’re giving your child the best chance at physical health, emotional stability, and lifelong success. It’s a simple but powerful way to support their health and prosperity.

      `,
    },
    {
      id: 4,
      title:
        "🍎 Good vs. Bad Eating Habits in Children: What Every Parent Should Know",
      author: "By BunnyTots International Preschool Team",
      category: "Parent Review",
      date: "February 4, 2025",
      image: blog4,
      content: `


At BunnyTots, we believe that healthy bodies support healthy minds. One of the most important parts of early childhood development is establishing a solid foundation of good eating habits. But in today’s fast-paced world, it's easy for children to fall into less-than-ideal eating routines. So, what exactly are good and bad eating habits in children—and how can we help guide them toward the right choices?

🥦 What Are Good Eating Habits?

Good eating habits are routines and choices that provide children with the nutrition they need to grow, learn, and stay active. These habits not only support physical development but also emotional regulation and cognitive performance.

Characteristics of good eating habits:

Eating a balanced diet: Including fruits, vegetables, whole grains, proteins, and dairy.

Consistent meal times: Eating breakfast, lunch, and dinner at regular intervals with healthy snacks in between.

Hydration: Drinking enough water throughout the day.

Mindful eating: Sitting down at the table to eat, avoiding screens or distractions.

Listening to hunger cues: Eating when hungry, stopping when full.


🍭 What Are Bad Eating Habits?

Bad eating habits may not seem harmful in the short term but can lead to nutritional deficiencies, poor concentration, weight issues, and long-term health concerns.

Examples of poor eating habits in children:

Skipping meals, especially breakfast

Eating too many processed or sugary foods

Overeating due to boredom or emotions

Snacking constantly without real hunger

Eating in front of a screen or while distracted



---

📊 Analysis: Impact of Good vs. Bad Eating Habits

🐰 How BunnyTots Encourages Good Eating Habits

At BunnyTots International Preschool, nutrition is an essential part of our learning environment:

🥗 Balanced Meal Plans: Our school meals are carefully designed to be kid-friendly and nutritionally rich.

🕰 Routine Mealtimes: We reinforce regular snack and lunch breaks as part of the day’s rhythm.

🍎 Food Education: Through storytelling, activities, and play, children learn about healthy foods in a fun and memorable way.

💧 Hydration Stations: We ensure children drink enough water throughout the day.

👩‍🏫 Positive Role Modeling: Teachers eat with children to model proper table manners and healthy choices.

🧠 Tips for Parents at Home

1. Offer choices within boundaries: Let your child pick between two healthy options.


2. Keep healthy snacks accessible: Cut fruit, yogurt, or nuts ready to grab.


3. Limit junk food availability at home.


4. Avoid using food as a reward or punishment.


5. Involve kids in meal prep: This builds curiosity and ownership over food choices.


🌟 Final Thought

Good eating habits begin early. At BunnyTots, we see each mealtime as a learning opportunity—not just for nutrition, but for social skills, responsibility, and emotional growth. Together with parents, we can ensure that children develop a healthy relationship with food—one bite at a time!


📞 Have questions about our nutrition program? Contact us or schedule a visit to see how BunnyTots supports your child’s all-round development!


      `,
    },
    {
      id: 5,
      title:
        "Character-building is integrated into daily activities at BunnyTots",
      author: "By BunnyTots International Preschool Team",
      category: "Parent Review",
      date: "May 11, 2025",
      image: blog5,
      content: `
      At BunnyTots, we believe true education goes beyond letters and numbers—it's about shaping values and character from the very beginning. While your child may grow up to become a doctor, engineer, MBA or chartered accountant, our deepest goal is to help them become kind, thoughtful, and responsible individuals.

Character-building is not taught in isolation—it’s part of everyday life at our school. Whether it’s:

Learning patience by waiting for their turn on the slide,

Understanding empathy when comforting a friend who’s feeling upset,

Practicing honesty when they admit to a mistake, or

Building responsibility by putting away toys after playtime,


—each moment is an opportunity to nurture values that will stay with them for life.

These small, daily lessons help form the foundation of character, and we are honored to work with you to raise not only smart minds, but good hearts.
      `,
    },
  ];

  const categories = [
    "Early Learning",
    "Daily Routine",
    "Emotional Growth",
    "Skill Development",
    "Nutrition",
    "Classroom Activities",
    "Parent-Teacher Collaboration",
    "Special Needs",
    "Creative Craft Corner",
    "Gross Motor Skills Games",
    "Printable Worksheets",
    "Parenting Tips Corner",
  ];

  // Color theme variables
  const primaryColor = "#E91E63"; // Pink
  const secondaryColor = "#9C27B0"; // Purple
  const accentColor = "#FF9800"; // Orange

  return (
    <div className='relative bg-white overflow-hidden'>
      {/* Hero Banner */}
      <div className='relative h-96 w-full'>
        <img
          src='https://admin.ssrvm.org/uploads/learning_through_play_602ef0c40c.png'
          alt='Preschool children playing'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
              {" "}
              BunnyTots{" "}
            </h1>
            <p className='text-xl text-white max-w-2xl mx-auto'>
              Expert advice and creative ideas for early childhood educators and
              parents
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='relative py-16 px-4 sm:px-6 lg:px-8'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#9C27B0]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Category Highlights */}

          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {/* Main Content Area */}
            <div className='lg:col-span-3'>
              {/* Featured Post */}
              <div className='mb-16'>
                <div className='bg-white rounded-xl shadow-md overflow-hidden border border-gray-100'></div>
              </div>

              {/* Blog Posts Grid */}
              <div className='grid grid-cols-1 md:grid-cols-1 gap-8 mb-12'>
                {blogs.map((post) => (
                  <div
                    key={post.id}
                    className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100'
                  >
                    <div className='h-72 overflow-hidden'>
                      <img
                        src={post.image}
                        alt={post.title}
                        className='w-full h-full  transition-transform duration-500 hover:scale-105'
                      />
                    </div>
                    <div className='p-6'>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                          post.category === "Creative Craft Corner"
                            ? "bg-[#E91E63]/10 text-[#E91E63]"
                            : post.category === "Gross Motor Skills Games"
                            ? "bg-[#9C27B0]/10 text-[#9C27B0]"
                            : post.category === "Printable Worksheets"
                            ? "bg-[#FF9800]/10 text-[#FF9800]"
                            : post.category === "Parenting Tips Corner"
                            ? "bg-[#2196F3]/10 text-[#2196F3]"
                            : "bg-[#E91E63]/10 text-[#E91E63]"
                        }`}
                      >
                        {post.category}
                      </span>
                      <h3 className='text-xl font-bold text-gray-900 mb-2'>
                        {post.title}
                      </h3>
                      <div className='flex flex-wrap items-center text-xs text-gray-500 mb-3'>
                        <span className='flex items-center mr-3 mb-1'>
                          <FaCalendarAlt className='mr-1' /> {post.date}
                        </span>
                        <span className='flex items-center mr-3 mb-1'>
                          <FaUser className='mr-1' /> {post.author}
                        </span>
                        <span className='flex items-center mb-1'>
                          <FaComment className='mr-1' /> {post.comments}
                        </span>
                      </div>
                      <p className='text-gray-700 text-sm mb-4'>
                        {post.content}
                      </p>
                      <button
                        className={`flex items-center text-sm font-semibold hover:underline ${
                          post.category === "Creative Craft Corner"
                            ? "text-[#E91E63]"
                            : post.category === "Gross Motor Skills Games"
                            ? "text-[#9C27B0]"
                            : post.category === "Printable Worksheets"
                            ? "text-[#FF9800]"
                            : post.category === "Parenting Tips Corner"
                            ? "text-[#2196F3]"
                            : "text-[#E91E63]"
                        }`}
                      ></button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className='flex justify-center mb-12'>
                <nav className='flex items-center space-x-2'>
                  <button className='px-4 py-2 rounded-md bg-[#E91E63] text-white hover:bg-[#D81B60]'>
                    1
                  </button>
                  <button className='px-4 py-2 rounded-md hover:bg-gray-100'>
                    2
                  </button>
                  <button className='px-4 py-2 rounded-md hover:bg-gray-100'>
                    3
                  </button>
                  <button className='px-4 py-2 rounded-md hover:bg-gray-100'>
                    4
                  </button>
                  <button className='px-4 py-2 rounded-md hover:bg-gray-100 flex items-center'>
                    Next <FaArrowRight className='ml-1 text-xs' />
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className='lg:col-span-1'>
              {/* Search */}
              <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>Search</h3>
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search preschool topics...'
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]/50'
                  />
                  <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#E91E63]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className='bg-[#E91E63]/10 p-6 rounded-xl shadow-md border border-[#E91E63]/20 mt-8'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  Preschool Tips Newsletter
                </h3>
                <p className='text-sm text-gray-700 mb-4'>
                  Get weekly activity ideas and parenting tips for preschoolers
                </p>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-[#E91E63]/50'
                />
                <button className='w-full bg-[#E91E63] text-white py-2 rounded-lg hover:bg-[#D81B60] transition-colors'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
