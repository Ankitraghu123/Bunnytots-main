import { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

   const faqs = [
    {
      question: "What age group does the preschool cater to?",
      answer: `We accept children aged 1.8 to 6 years, depending on the program level:
- Toddlers: 1.8 – 2.5 years
- Bunny Nursery: 2.5 – 3.5 years
- Bunny Junior: 3.5 – 4.5 years
- Bunny Senior KG: 4.5 – 6 years`
    },
    {
      question: "What are the preschool timings?",
      answer: "Regular school timings are from 9:00 AM to 12:00 PM."
    },
    {
      question: "What curriculum do you follow?",
      answer: `Classes from Toddlers to Bunny Senior, we follow "BunnyLearn" a blended curriculum famous world over, based upon careful scientific study, appropriate for Early Years Foundation Stage (EYFS), incorporating Montessori, play-based, play and learn and thematic learning approaches tailored to early childhood development and building strong foundation for overall development and lifelong learning. 

In India our Curriculum and syllabus is aligned with  CBSE pattern`
    },
    {
      question: "Is toilet training required before joining?",
      answer: `Toilet training is not mandatory. We assist and encourage children in the toilet training process in a supportive and hygienic manner. We also encourage parents to help their child for toilet training. 

 `
    },
    {
      question: "What are the safety and security measures in place?",
      answer: `- CCTV surveillance across the premises
- Qualified and trained staff
- Secured entry and exit points
- First-aid trained staff on site
- Fire safety systems installed
- Fire and safety rules are followed, school building is equipped with fire fighting equipment.
`
    },
    {
      question: "What should my child bring to school each day?",
      answer: `- A school bag with books and notebooks (as per schedule) A change of clothes
- Water bottle
- Lunch box
 - Diapers/pull-ups if required Please label all items with your child's name.


Note: we don't allow expensive articles in the school premises, for example: jewellery(real or artificial), mobile phones, toys, make-up items, money etc. `

    },
    {
      question: "How do you handle health and illness?",
      answer: "If your child shows signs of illness (fever, cold, diarrhea, etc.), we request that you keep them home. In case of illness during school hours, we will notify parents immediately "

    },
    {
      question: "How do you manage discipline and behavior?",
      answer: "We use positive reinforcement, redirection, and gentle guidance techniques to encourage good behavior. We do not use any form of punishment."

    },
    {
      question: "Are there any extra-curricular or enrichment activities?",
      answer: `Yes! We offer activities such as:
- Dance and music
- Art and craft
- Storytelling
- Nature walks and field trips
- Festival celebrations and theme days`
    },
    {
      question: "Is transportation available?",
      answer: "Yes, our third party contractors provide safe and reliable transportation with female attendants. Routes and availability vary by location."

    },
    {
      question: "How do you assess a child's progress?",
      answer: "We use ongoing observational monthly assessments and developmental checklists. Progress reports are shared thrice a year, and parent-teacher meetings are scheduled regularly thrice a year. "
    },
    {
      question: "How can I get involved as a parent?",
      answer: `We encourage parent involvement through:
- Volunteering at events
- Guest storytelling or activity sessions
- Participating in workshops and parenting seminars`
    },
    {
      question: "Do you encourage children for regular physical activities?",
      answer: `Yes, we regularly engage students in physical activities like. 
"yoga, aerobics and sports, because we believe   A healthy mind lives in a healthy body".`
    },
    {
      question: "Do you encourage parents to give suggestions?",
      answer: `Yes! every branch of BunnyTots is fitted with a Suggestion Box, we encourage parents to drop their suggestions in the suggestion box, because we consider parents as our partners.
`
    },
    {
      question: "How do you teach writing skills to nursery kids?",
      answer: `Developing writing skills in preschool children involves building pre-writing skills through engaging, age-appropriate activities. Writing at this stage is less about spelling or grammar and more about helping children develop the fine motor control, hand-eye coordination, language skills, and confidence they need to express themselves through marks, symbols, and eventually letters.
:
- We start with many activities to improve fine motor skills:
- Activities:
- Playdough: Rolling, squishing, pinching Threading beads, buttoning, zipping
- Using tongs or tweezers to pick up objects
- Scribbling and drawing with crayons, chalk, markers 
- Sand trays for finger tracing
- Pegboards, puzzles, and construction toys.
- After improving fine motor skills, we teach writing skills from line patterns without holding the hand of a child.
- A child should not depend on the teacher or parents. We make kids independent in writing skills in nursery class.




 `
    },
    {
      question: "Do you have qualified teachers?",
      answer: `Yes, we have qualified and caring teachers at our preschool. All our educators are qualified and trained in early childhood education and understand the developmental needs of young children. They not only meet the required qualifications but also bring warmth, patience, and creativity to the classroom. We ensure our teachers receive ongoing training so they can provide the best learning experiences for your child. Your child’s growth, safety, and happiness are our top priorities!  `
    }
  ];

  return (
    <div className="relative bg-white py-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium mb-3">
            FAQs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
            Frequently <span className="text-[#E91E63]">Asked Questions</span>
          </h1>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our preschool programs and services
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200"
            >
              <button
                className={`w-full px-6 py-4 text-left font-medium flex justify-between items-center 
                  ${activeIndex === index ? 'bg-[#E91E63]/10 text-[#E91E63]' : 'bg-white text-gray-700'}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 
                    ${activeIndex === index ? 'rotate-180 text-[#E91E63]' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 
                  ${activeIndex === index ? 'max-h-[400px] py-4' : 'max-h-0'}`}
              >
                <div className="max-h-[300px] overflow-y-auto pr-2  custom-scrollbar">
                  <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;
