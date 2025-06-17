// import React, { useEffect, useState } from "react";
// import DataTable from "react-data-table-component";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchAllSyllabus } from "../../redux/syllabus/syllabusThunks";

// const UserDashboard = () => {
//   const syllabus = useSelector((state) => state.syllabus.syllabusList);
//   const [data, setData] = useState(syllabus);
//   const [filterText, setFilterText] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchAllSyllabus());
//   }, [dispatch]);

//   useEffect(() => {
//     setData(syllabus);
//   }, [syllabus]);

//   // Filtered data for search
//   const filteredItems = data.filter(
//     (item) =>
//       item.classes.toLowerCase().includes(filterText.toLowerCase()) ||
//       item.subject.toLowerCase().includes(filterText.toLowerCase()) ||
//       item.syllabus.toLowerCase().includes(filterText.toLowerCase())
//   );

//   // Table columns (Read-only)
//   const columns = [
//     {
//       name: "Class",
//       selector: (row) => row.classes,
//       sortable: true,
//     },
//     {
//       name: "Subject",
//       selector: (row) => row.subject,
//       sortable: true,
//     },
//     {
//       name: "Syllabus",
//       selector: (row) => row.syllabus,
//       wrap: true,
//       cell: (row) => <div className='py-2'>{row.syllabus}</div>,
//     },
//     {
//       name: "Documents",
//       cell: (row) => (
//         <div className='text-blue-600 space-y-1'>
//           {row.documents.map((doc, index) => (
//             <div key={index}>
//               <a
//                 href={`http://localhost:5000/uploads/${doc}`}
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='hover:text-blue-800'
//               >
//                 View Document {index + 1}
//               </a>
//             </div>
//           ))}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className='container mx-auto px-4 py-8'>
//       <h3 className='text-2xl font-bold mb-6 text-gray-800'>
//         Preschool Syllabus Table
//       </h3>

//       {/* Search Box */}
//       <div className='mb-6'>
//         <input
//           type='text'
//           placeholder='Search by class, subject, syllabus...'
//           className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//         />
//       </div>

//       {/* Data Table */}
//       <div className='bg-white rounded-lg shadow overflow-hidden'>
//         <DataTable
//           columns={columns}
//           data={filteredItems}
//           pagination
//           highlightOnHover
//           striped
//           responsive
//           className='border-t border-gray-200'
//         />
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSyllabus } from "../../redux/syllabus/syllabusThunks";
import toast from "react-hot-toast";

const UserDashboard = () => {
  const syllabus = useSelector((state) => state.syllabus.syllabusList);
  const [data, setData] = useState(syllabus);
  const [filterText, setFilterText] = useState("");
  const dispatch = useDispatch();

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState("");

  useEffect(() => {
    dispatch(fetchAllSyllabus());
  }, [dispatch]);

  useEffect(() => {
    setData(syllabus);
  }, [syllabus]);

  // Filtered data
  const filteredItems = data.filter(
    (item) =>
      item.classes.toLowerCase().includes(filterText.toLowerCase()) ||
      item.subject.toLowerCase().includes(filterText.toLowerCase()) ||
      item.syllabus.toLowerCase().includes(filterText.toLowerCase())
  );

  // Columns
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
      name: "Documents",
      cell: (row) => (
        <div className='text-blue-600 space-y-1'>
          {row.documents.map((doc, index) => (
            <div key={index}>
              <button
                onClick={() => {
                  setSelectedDoc({ doc, pin: row.accessPin });
                  setShowPinModal(true);
                }}
                className='text-blue-600 hover:text-blue-800 underline'
              >
                View Document {index + 1}
              </button>
            </div>
          ))}
        </div>
      ),
    },
  ];

  // Handle PIN submit
  const handlePinSubmit = () => {
    if (enteredPin === selectedDoc.pin) {
      const url = `http://localhost:5000/uploads/${selectedDoc.doc}`;
      window.open(url, "_blank");
      resetPinModal();
    } else {
      toast.error("Incorrect access pin");
    }
  };

  const resetPinModal = () => {
    setEnteredPin("");
    setSelectedDoc(null);
    setShowPinModal(false);
  };

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

      {/* PIN Modal */}
      {showPinModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded shadow-lg w-80'>
            <h2 className='text-lg font-semibold mb-4'>Enter Access PIN</h2>
            <input
              type='password'
              value={enteredPin}
              onChange={(e) => setEnteredPin(e.target.value)}
              className='w-full border px-3 py-2 rounded mb-4'
              placeholder='Access PIN'
            />
            <div className='flex justify-end gap-2'>
              <button
                onClick={resetPinModal}
                className='bg-gray-500 text-white px-4 py-2 rounded'
              >
                Cancel
              </button>
              <button
                onClick={handlePinSubmit}
                className='bg-blue-600 text-white px-4 py-2 rounded'
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
