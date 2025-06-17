import img1  from '../assets/productimg/img1.jpeg'
import img2 from '../assets/productimg/img2.jpeg'
import img3 from '../assets/productimg/img3.jpeg'
import img8 from "../assets/productimg/pic8.jpeg"
import desk from "../assets/productimg/desk.jpeg"
import chair from "../assets/productimg/chair.jpeg"
import visitor from "../assets/productimg/visitor.jpeg"
import  img5 from "../assets/productimg/img5.jpeg" 
import img6 from "../assets/productimg/img6.jpeg"
import img7 from "../assets/productimg/img7.jpeg"
import React, { useState } from 'react';

const BunnyWoodlandProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);


  const brandIntro = {
     
    subtitle: "A Reflection of Elegance",
    description: [
      "Bunny & Woodland is a classic amalgamation of form and function. Crafted for schools, preschools & offices, the range is clean and convenient and has an understated design aesthetic that adapts to any space.",
      "Bunny & Woodland is a distinct, defined style which originated in the early first century of 3rd millennium. It uses a combination of vinyl, steel, plastic, glass or wood having monochromatic/multi colors. Bunny & Woodland furniture lives at the intersection of clean lines and relaxed comfort accentuating form and function.",
      "Each piece should be considered and inspected carefully; the company that have really revolutionized the industry and have made the process of finding the right modern furniture lot easier. Classroom furniture must fit the children, allow movement and hence invariably encourage a good posture. Movement plays an important part in seating. All these factors have a major impact on students learning and can immensely improve their performance if done right."
    ]
  };

   const products = [
    {
  id: 'BW-SRAST',
  name: "School Wooden Racks High Quality Multi Colors",
  image:img1 ,
  description: "School-shelf is a free-standing furniture unit with multiple horizontal stack of racks or shelves which are used for varied purposes – to store your educational aids, toys, books or display curios. Some have a back panel or could be open from both sides. All wooden panels shall be stained with approved duco paint finished with melamine or clear layer for scratch resistivity to pass quality test.",
  features: [
    "Unique style - Unique shape, to stand alone, no longer need to rely on the wall, a unique multi color",
    "Spacious and compact - Despite large storage space, the wooden shelf takes up little space - Fits also in narrow corridors and small rooms - You can put it in any place, it does not occupy the place, and you can move it easy, and you can follow your preferences adjust your position",
    "Easy assembly - The standing shelf can also be easily assembled by one person alone – special additional tools are not required",
    "Safe stand - it can stand by itself - this is ensured by the high quality and robustness of the material as well as its good processing"
  ],
  specifications: [
    { label: "Brand", value: "Bunny & Woodland" },
    { label: "Dimensions", value: "H 900mm × W 1200mm × D 300mm (All dimension in millimeters)" },
    { label: "Assembly", value: "Carpenter Assembly" },
    { label: "Primary Material", value: "Engineered 18mm Kryssfaner" },
    { label: "Collection", value: "Bunny & Woodland" },
    { label: "Verticals", value: "300 mm inside from front" },
    { label: "Part Number", value: "BW-SRAST" }
  ]
},
    {
      id: 'BW-HMTAST',
      name: "Kindergarten Half Moon Table",
      image: img2,
      description: "HIGH QUALITY and superior in construction KIDS Table for schools and home, the Performance preschool series offers an intelligent solution to any Play School need. Attention to detail in design, quality of hardware, and use of premium grade work surfaces ensure years of trouble free use.",
      features: [
        "Colors: Choice of 4 colors Red, Green, Blue and Yellow",
        "Table Top: Superior quality smooth MDF top",
        "Durability: Leg fasteners for increased durability",
        "Legs: Strong wooden legs"
      ],
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Dimensions", value: "H 470mm × L 1200mm × W 600mm" },
        { label: "Assembly", value: "Carpenter Assembly" },
        { label: "Primary Material", value: "Engineered MDF" },
        { label: "Collection", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-HMTAST" }
      ]
    },
    {
      id: 'BW-SCAST',
      name: "School Study Chair",
      image: img3,
      description: "Strong and Durable Kids Chair (Red, Blue, Green, Yellow)",
      features: [
        "Can sustain 50kg weight",
        "1-4 Years weather resistant and water proof",
        "Indoor and outdoor use, light weight, safe and non-toxic",
        "Size: 10\" & 12\"",
        "Colour: Blue, Red, Green, Yellow",
        "Type of Material: Plastic"
      ],
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-SCAST" }
      ]
    },
    {
      id: 'BW-FCBLK',
      name: "Office Clear Glass Doors Wood High Filing Cabinet",
      image: img8,
      description: "These high quality wooden filing cabinets with glass doors are extensively used in commercial offices, schools and home to store important files, documents and books.",
      features: [ "Spacious storage for files and books",
  "Elegant clear glass doors for visibility",
  "Sturdy engineered wood construction",
  "Smooth closing doors with metal hinges",
  "Modern design suitable for office or home",
  "Scratch-resistant and easy-to-clean surface"] ,
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Dimensions", value: "H 185mm × W 760mm × D 330mm" },
        { label: "Assembly", value: "Carpenter Assembly" },
        { label: "Primary Material", value: "Engineered Wood" },
        { label: "Collection", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-FCBLK" }
      ]
    },
    {
      id: 'BW-EODBLK',
      name: "Executive Office Desk",
      image: desk,
      description: "RICH IN STYLING and superior in construction, the Performance Office Series offers an intelligent solution to any workstation need. Available in a wide range of components and sizes, it can be easily pieced together to create the configuration that best suits your needs. Attention to detail in design, quality of hardware, and use of premium grade work surfaces ensure years of trouble free use.",
      features: [
        "Choice of 6 finishes",
        "Top quality Drawer Slides",
        "Elegant Finish",
        "Flared drawer pulls for an enhanced look",
        "Locks and leveling glides are included"
      ],
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Dimensions", value: "H 750mm × Desk L 1500mm × W 900mm" },
        { label: "Assembly", value: "Carpenter Assembly" },
        { label: "Primary Material", value: "Engineered Board" },
        { label: "Collection", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-EODBLK" }
      ]
    },
    {
      id: 'BW-ECBLK',
      name: "High Back Executive Comfortable Chair in Black & Red Leatherette",
      image: chair,
      description: "Premium executive chair for office use with high comfort features.",
      features: [
        "Type: Swivel",
        "Casters: 5 casters",
        "Color: Black & Red",
        "Comfortable backrest: Supports your back while seated",
        "Armrest: Comfortable and strong armrest",
        "Seat: Padded comfortable seat",
        "Adjuster: Seat adjuster to lock the chair back into place"
      ],
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-ECBLK" }
      ]
    },
    {
      id: 'BW-VCBLK',
      name: "High Living Black Leatherette Comfortable Visitor Chair",
      image: visitor ,
      description: "Elegant visitor chair for office reception and waiting areas.",
      features: [
        "Type: Straight back",
        "Color: Black & Red",
        "Comfortable backrest: Supports your back while seated",
        "Armrest: Comfortable and strong armrest",
        "Seat: Padded comfortable seat"
      ],
      specifications: [
        { label: "Brand", value: "Bunny & Woodland" },
        { label: "Part Number", value: "BW-VCBLK" }
      ]
    },
  
   {
    id: 'IMG-1',
    name: "Stylish Office Chair",
    image: img5,
      description: "",
      features: [ ],
      specifications: [

      ],
  },
  {
    id: 'IMG-2',
    name: "Modern Sofa",
    image: img6,
      description: "",
      features: [ ],
      specifications: [

      ],
  },
  {
    id: 'IMG-3',
    name: "Elegant Round Table",
    image: img7,
      
      description: "",
      features: [ ],
      specifications: [

      ],
  }
  ];


  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <>
     <div className="max-w-6xl mx-auto px-6  rounded py-12">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-serif font-bold text-[#E91E63] mb-2"> <span className='text-[#0000b8]'>Bunny</span>   & Woodland, </h1>
          <h2 className="text-xl font-light text-gray-600 mb-6">{brandIntro.subtitle}</h2>
          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            {brandIntro.description.map((para, index) => (
              <p key={index} className="text-justify">{para}</p>
            ))}
          </div>
        </div>
    </div>  
    <div className=" py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-3xl font-bold text-center  mb-4  text-[#E91E63] ">Our Products</h1>
        
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-44 object-contain "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-50 w-full h-6 py-1 text-center text-white px-4">
                  <h3 className="text-sm font-semibold">{product.name}</h3>
                </div>
              </div>
              <div className="p-4">
                <button 
                  className="w-full  bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white  py-2 rounded-md hover:bg-blue-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button 
                  onClick={handleClose}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-6 md:w-1/2">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h2>
                    <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Details:</h3>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="ml-2 text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 px-6 py-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.specifications.map((spec, index) => (
                      <div key={index} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{spec.value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      Part of the <span className="font-medium text-gray-900">Bunny & Woodland</span> Collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>

    </>

  );
};

export default BunnyWoodlandProducts;