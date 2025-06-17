import React, { useState } from "react";
import UploadDocumentModal from "./UploadDocumentModal";
import DocumentTable from "./DocumentTable";

const DocumentManagement = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl font-bold'>Document Management</h1>
        <button
          onClick={() => setShowModal(true)}
          className='bg-green-600 text-white px-4 py-2 rounded'
        >
          Upload Document
        </button>
      </div>

      <UploadDocumentModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
      <DocumentTable />
    </div>
  );
};

export default DocumentManagement;
