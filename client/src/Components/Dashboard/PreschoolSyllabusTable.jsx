import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FiEdit, FiTrash2, FiX, FiSave } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllSyllabus,
  updateSyllabus,
  deleteSyllabus,
} from "../../redux/syllabus/syllabusThunks";
import toast from "react-hot-toast";

import { ShowLoading, HideLoading } from "../../redux/alertsSlice";

const initialData = [
  {
    id: 1,
    classes: "Play Group",
    subject: "Language",
    syllabus: "Introduction to alphabets (A-Z), simple words",
    documents: ["alphabets-chart.pdf"],
  },
  {
    id: 2,
    classes: "Nursery",
    subject: "Math",
    syllabus: "Numbers 1-10, shapes, counting objects",
    documents: ["nursery-math.pdf"],
  },
  {
    id: 3,
    classes: "LKG",
    subject: "EVS",
    syllabus: "Myself, body parts, colors, fruits",
    documents: ["lkgevsterms.docx"],
  },
  {
    id: 4,
    classes: "UKG",
    subject: "General Knowledge",
    syllabus: "Days of week, months, festivals, seasons",
    documents: ["ukggk.pdf"],
  },
];

const PreschoolSyllabusTable = () => {
  const syllabus = useSelector((state) => state.syllabus.syllabusList);

  const [data, setData] = useState(syllabus);
  const [filterText, setFilterText] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [editFormData, setEditFormData] = useState({
    classes: "",
    subject: "",
    syllabus: "",
    documents: "",
    accessPin: "",
  });

  const dispatch = useDispatch();

  // keep local state in sync with redux
  useEffect(() => {
    dispatch(fetchAllSyllabus());
  }, [dispatch]);

  useEffect(() => {
    setData(syllabus);
  }, [syllabus]);

  // Open edit modal and set current item
  const handleEditClick = (item) => {
    setCurrentItem(item);
    setEditFormData({
      classes: item.classes,
      subject: item.subject,
      syllabus: item.syllabus,
      accessPin: item.accessPin,
      documents: item.documents.join(", "),
    });
    setIsEditModalOpen(true);
  };

  // Handle form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({
      ...editFormData,
      [name]: value,
    });
  };

  // 1. Delete item
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this syllabus?"
    );
    if (!confirmed) return;

    dispatch(ShowLoading());
    try {
      await dispatch(deleteSyllabus(id)).unwrap();
      toast.success("Syllabus deleted successfully");
      dispatch(fetchAllSyllabus());
    } catch (error) {
      toast.error("Delete failed: " + error);
    } finally {
      dispatch(HideLoading());
    }
  };

  // 2. Save edited syllabus
  const handleSave = async () => {
    dispatch(ShowLoading());

    try {
      const id = currentItem._id;
      const updatedItem = {
        classes: editFormData.classes,
        subject: editFormData.subject,
        syllabus: editFormData.syllabus,
        accessPin: editFormData.accessPin,
        documents: editFormData.documents.split(",").map((doc) => doc.trim()),
      };

      await dispatch(updateSyllabus({ id, updatedItem })).unwrap();
      toast.success("Syllabus updated successfully");

      setIsEditModalOpen(false);
      dispatch(fetchAllSyllabus());
    } catch (error) {
      console.log(error);

      toast.error("Update failed: " + error);
    } finally {
      dispatch(HideLoading());
    }
  };

  // Filtered data for search
  const filteredItems = data.filter(
    (item) =>
      item.classes.toLowerCase().includes(filterText.toLowerCase()) ||
      item.subject.toLowerCase().includes(filterText.toLowerCase()) ||
      item.syllabus.toLowerCase().includes(filterText.toLowerCase())
  );

  // Table columns
  const columns = [
    {
      name: "Class",
      selector: (row) => row.classes,
      sortable: true,
    },
    {
      name: "Subject",
      selector: (row) => row.subject,
      sortable: true,
    },
    {
      name: "Syllabus",
      selector: (row) => row.syllabus,
      wrap: true,
      cell: (row) => <div className='py-2'>{row.syllabus}</div>,
    },
    {
      name: "Access Pin",
      selector: (row) => row.accessPin,
      wrap: true,
      cell: (row) => <div className='py-2'>{row.accessPin}</div>,
    },
    {
      name: "Documents",
      cell: (row) => (
        <div className='text-blue-600 space-y-1'>
          {row.documents.map((doc, index) => (
            <div key={index}>
              <a
                href={`http://localhost:5000/uploads/${doc}`}
                target='_blank'
                rel='noopener noreferrer'
                className=' hover:text-blue-800'
              >
                View Document {index + 1}
              </a>
            </div>
          ))}
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className='flex space-x-2'>
          <button
            onClick={() => handleEditClick(row)}
            className='p-2 text-blue-600 rounded hover:bg-blue-50'
            title='Edit'
          >
            <FiEdit size={18} />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            className='p-2 text-red-600 rounded hover:bg-red-50'
            title='Delete'
          >
            <FiTrash2 size={18} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h3 className='text-2xl font-bold mb-6 text-gray-800'>
        Preschool Syllabus Table
      </h3>

      {/* Search Box */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search by class, subject, syllabus...'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      {/* Data Table */}
      <div className='bg-white rounded-lg shadow overflow-hidden'>
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          highlightOnHover
          striped
          responsive
          className='border-t border-gray-200'
        />
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-lg shadow-xl w-full max-w-lg'>
            <div className='flex justify-between items-center border-b border-gray-200 px-6 py-4'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Edit Syllabus
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className='text-gray-500 hover:text-gray-700'
              >
                <FiX size={24} />
              </button>
            </div>
            <div className='p-6 space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Class
                </label>
                <input
                  type='text'
                  name='classes'
                  value={editFormData.classes}
                  onChange={handleFormChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Subject
                </label>
                <input
                  type='text'
                  name='subject'
                  value={editFormData.subject}
                  onChange={handleFormChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Access Pin
                </label>
                <input
                  type='text'
                  name='accessPin'
                  value={editFormData.accessPin}
                  onChange={handleFormChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Syllabus
                </label>
                <textarea
                  name='syllabus'
                  value={editFormData.syllabus}
                  onChange={handleFormChange}
                  rows='4'
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              {/* <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Documents (comma separated)
                </label>
                <input
                  type='text'
                  name='documents'
                  value={editFormData.documents}
                  onChange={handleFormChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div> */}
            </div>
            <div className='flex justify-end space-x-3 px-6 py-4 border-t border-gray-200'>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center'
              >
                <FiSave className='mr-2' />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreschoolSyllabusTable;
