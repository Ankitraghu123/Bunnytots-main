// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchDocuments,
//   deleteDocument,
// } from "../../../redux/student/documentSlice";
// import { FiTrash2 } from "react-icons/fi";

// const DocumentTable = () => {
//   const dispatch = useDispatch();

//   // Extract state from Redux
//   const {
//     data: rawData,
//     loading,
//     error,
//   } = useSelector((state) => state?.document || {});

//   const data = Array.isArray(rawData) ? rawData : [];

//   const [filterYear, setFilterYear] = useState("");

//   useEffect(() => {
//     dispatch(fetchDocuments());
//   }, [dispatch]);

//   // Filtered data
//   const filteredData = filterYear
//     ? data.filter((doc) => doc.year === filterYear)
//     : data;

//   // Delete handler
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this document?"
//     );
//     if (confirmDelete) {
//       dispatch(deleteDocument(id))
//         .then(() => dispatch(fetchDocuments())) // Refresh the list after delete
//         .catch((err) => console.error("Delete failed:", err));
//     }
//   };

//   return (
//     <div className='mt-6'>
//       <div className='mb-4 flex items-center justify-between'>
//         <div>
//           <label className='mr-2'>Filter by Year:</label>
//           <select
//             value={filterYear}
//             onChange={(e) => setFilterYear(e.target.value)}
//             className='border p-1 rounded'
//           >
//             <option value=''>All Years</option>
//             {[...new Set(data.map((doc) => doc.year))].map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>

//         <p className='text-sm text-gray-600'>
//           Showing {filteredData.length} document
//           {filteredData.length !== 1 && "s"}
//         </p>
//       </div>

//       {loading ? (
//         <p className='text-gray-500'>Loading documents...</p>
//       ) : error ? (
//         <p className='text-red-500'>Failed to load documents: {error}</p>
//       ) : (
//         <table className='w-full border'>
//           <thead>
//             <tr className='bg-gray-200'>
//               <th className='p-2'>Year</th>
//               <th className='p-2'>File Name</th>
//               <th className='p-2'>View</th>
//               <th className='p-2'>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredData.length === 0 ? (
//               <tr>
//                 <td colSpan='4' className='text-center py-4 text-gray-500'>
//                   No documents found
//                 </td>
//               </tr>
//             ) : (
//               filteredData.map((doc) => (
//                 <tr key={doc.id}>
//                   <td className='p-2'>{doc.year}</td>
//                   <td className='p-2'>{doc.filename}</td>
//                   <td className='p-2'>
//                     <a
//                       href={doc.fileUrl}
//                       target='_blank'
//                       rel='noreferrer'
//                       className='text-blue-600 underline'
//                     >
//                       View
//                     </a>
//                   </td>
//                   <td className='p-2'>
//                     <button
//                       onClick={() => handleDelete(doc._id)}
//                       className='text-red-600 hover:text-red-800'
//                       title='Delete document'
//                     >
//                       <FiTrash2 />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default DocumentTable;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDocuments,
  deleteDocument,
} from "../../../redux/student/documentSlice";
import { ShowLoading, HideLoading } from "../../../redux/alertsSlice";
import { FiTrash2 } from "react-icons/fi";

const DocumentTable = () => {
  const dispatch = useDispatch();

  const {
    data: rawData,
    loading,
    error,
  } = useSelector((state) => state?.document || {});

  const data = Array.isArray(rawData) ? rawData : [];
  const [filterYear, setFilterYear] = useState("");

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = async () => {
    try {
      dispatch(ShowLoading());
      await dispatch(fetchDocuments()).unwrap();
    } catch (err) {
      console.error("Failed to load documents:", err);
    } finally {
      dispatch(HideLoading());
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this document?"
    );
    if (!confirmDelete) return;

    try {
      dispatch(ShowLoading());
      await dispatch(deleteDocument(id)).unwrap();
      await loadDocuments();
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      dispatch(HideLoading());
    }
  };

  const filteredData = filterYear
    ? data.filter((doc) => doc.year === filterYear)
    : data;

  return (
    <div className='mt-6'>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <label className='mr-2'>Filter by Year:</label>
          <select
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
            className='border p-1 rounded'
          >
            <option value=''>All Years</option>
            {[...new Set(data.map((doc) => doc.year))].map((year, i) => (
              <option key={i} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <p className='text-sm text-gray-600'>
          Showing {filteredData.length} document
          {filteredData.length !== 1 && "s"}
        </p>
      </div>

      {loading ? (
        <p className='text-gray-500'>Loading documents...</p>
      ) : error ? (
        <p className='text-red-500'>Failed to load documents: {error}</p>
      ) : (
        <div className='overflow-x-auto'>
          <table className='min-w-full border border-gray-300'>
            <thead className='bg-gray-200'>
              <tr>
                <th className='text-left p-2 border'>Year</th>
                <th className='text-left p-2 border'>File Name</th>
                <th className='text-left p-2 border'>View</th>
                <th className='text-left p-2 border'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan='4' className='text-center py-4 text-gray-500'>
                    No documents found
                  </td>
                </tr>
              ) : (
                filteredData.map((doc, i) => (
                  <tr key={i} className='hover:bg-gray-100'>
                    <td className='p-2 border'>{doc.year}</td>
                    <td className='p-2 border'>{doc.filename}</td>
                    <td className='p-2 border'>
                      <a
                        href={doc.fileUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='text-blue-600 underline'
                      >
                        View
                      </a>
                    </td>
                    <td className='p-2 border'>
                      <button
                        onClick={() => handleDelete(doc._id)}
                        className='text-red-600 hover:text-red-800'
                        title='Delete document'
                      >
                        <FiTrash2 />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DocumentTable;
