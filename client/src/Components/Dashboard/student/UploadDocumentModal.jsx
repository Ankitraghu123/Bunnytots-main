import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  uploadDocument,
  fetchDocuments,
} from "../../../redux/student/documentSlice";
import toast from "react-hot-toast";
import { ShowLoading, HideLoading } from "../../../redux/alertsSlice";

const UploadDocumentModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [year, setYear] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!year || !file) return toast.error("Year and file are required");

    const formData = new FormData();
    formData.append("year", year);
    formData.append("file", file); // ✅ Correct field name

    dispatch(ShowLoading());
    try {
      await dispatch(uploadDocument(formData)).unwrap();
      toast.success("Document uploaded");
      dispatch(fetchDocuments());
      onClose(); // Close modal
    } catch (err) {
      toast.error(err?.message || "Upload failed");
    } finally {
      dispatch(HideLoading());
    }
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
      <div className='bg-white p-6 rounded shadow-lg w-96'>
        <h2 className='text-xl font-bold mb-4'>Upload Document</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block mb-1'>Select Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='w-full border p-2 rounded'
              required
            >
              <option value=''>Select Year</option>
              {Array.from({ length: 10 }, (_, i) => {
                const y = new Date().getFullYear() - i;
                return (
                  <option key={y} value={y}>
                    {y}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='mb-4'>
            <label className='block mb-1'>Upload Document</label>
            <input
              type='file'
              accept='.pdf,.docx,.jpg,.png'
              onChange={(e) => setFile(e.target.files[0])}
              required
              className='w-full border p-2 rounded'
            />
          </div>
          <div className='flex justify-end gap-2'>
            <button
              type='button'
              onClick={onClose}
              className='bg-gray-500 text-white px-4 py-2 rounded'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded'
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadDocumentModal;
