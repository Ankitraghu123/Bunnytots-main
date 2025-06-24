import React, { useState } from "react";
import { createSyllabus } from "../../redux/syllabus/syllabusThunks";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/alertsSlice";

const SyllabusForm = () => {
  const [formData, setFormData] = useState({
    classes: "",
    subject: "",
    syllabus: "",
    documents: [],
    accessPin: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "documents") {
      setFormData({ ...formData, documents: Array.from(files) }); // ✅ store File objects
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("classes", formData.classes);
    data.append("subject", formData.subject);
    data.append("syllabus", formData.syllabus);
    data.append("accessPin", formData.accessPin);

    // Append actual File objects
    for (let i = 0; i < formData.documents.length; i++) {
      data.append("documents", formData.documents[i]); // ✅ real files, not names
    }

    try {
      dispatch(ShowLoading());
      const result = await dispatch(createSyllabus(data));

      if (createSyllabus.fulfilled.match(result)) {
        toast.success("Syllabus submitted!");
        setFormData({
          classes: "",
          subject: "",
          syllabus: "",
          documents: "",
          accessPin: "",
        });
      } else {
        toast.error(result.payload || "Submission failed");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div className='relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Decorative elements matching ProgramsSection */}
      <div className='absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section header matching ProgramsSection */}
        <div className='text-center mb-12'>
          <span className='inline-block px-4 py-1 bg-[#EE2341]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3'>
            Syllabus Management
          </span>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Add <span className='text-[#EE2341]'>Syllabus</span>
          </h1>
          <div className='w-24 h-1 bg-[#EE2341] mx-auto mb-6'></div>
        </div>

        <form
          onSubmit={handleSubmit}
          className='bg-white rounded-2xl shadow-lg border border-gray-100 p-8'
        >
          {/* <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>
              Class
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
              name='classes'
              value={formData.classes}
              onChange={handleChange}
              required
            />
          </div> */}

          <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>
              Class
            </label>
            <select
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
              name='classes'
              value={formData.classes}
              onChange={handleChange}
              required
            >
              <option value=''>Select Class</option>
              <option value='Nursery'>Bunny Toddlers</option>
              <option value='LKG'>Bunny Nursery</option>
              <option value='UKG'>Bunny Junior(KG1)</option>
              <option value='1'>Bunny Senior</option>
              <option value='I'>I</option>
              <option value='II'>II</option>
              <option value='III'>III</option>
              <option value='IV'>IV</option>
              <option value='V'>V</option>
            </select>
          </div>

          <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2'>
              Subject
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-6  max-h-3xl '>
            <label className='block text-gray-700 font-medium mb-2'>
              Syllabus Access Pin
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
              name='accessPin'
              value={formData.accessPin}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-6  max-h-3xl '>
            <label className='block text-gray-700 font-medium mb-2'>
              Syllabus
            </label>
            <textarea
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent min-h-[150px]'
              name='syllabus'
              value={formData.syllabus}
              onChange={handleChange}
              required
            />
          </div>

          <div className='mb-8'>
            <label className='block text-gray-700 font-medium mb-2'>
              Documents
            </label>
            <input
              type='file'
              className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
              name='documents'
              multiple
              onChange={handleChange}
            />
            {formData.documents.length > 0 && (
              <div className='mt-2 text-sm text-gray-500'>
                Selected files: {formData.documents.join(", ")}
              </div>
            )}
          </div>

          <button
            type='submit'
            className='w-full px-6 py-3 bg-gradient-to-r from-[#EE2341] to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'
          >
            Submit Syllabus
          </button>
        </form>
      </div>
    </div>
  );
};

export default SyllabusForm;
