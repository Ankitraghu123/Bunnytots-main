// import React, { useState } from 'react';

// const UserManagement = () => {
//   // Sample user data
//   const initialUsers = [
//     { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
//     { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
//     { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
//     { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User' },
//   ];

//   const [users, setUsers] = useState(initialUsers);
//   const [editingId, setEditingId] = useState(null);
//   const [showPasswordModal, setShowPasswordModal] = useState(false);
//   const [passwordData, setPasswordData] = useState({
//     oldPassword: '',
//     newPassword: '',
//     confirmPassword: ''
//   });

//   // Handle edit
//   const handleEdit = (id) => {
//     setEditingId(id);
//   };

//   // Handle save
//   const handleSave = (id) => {
//     setEditingId(null);
//     // In a real app, you would send an API request to update the user
//   };

//   // Handle input change for user data
//   const handleUserChange = (id, field, value) => {
//     setUsers(users.map(user =>
//       user.id === id ? { ...user, [field]: value } : user
//     ));
//   };

//   // Handle password input change
//   const handlePasswordChange = (e) => {
//     const { name, value } = e.target;
//     setPasswordData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // Handle password submit
//   const handlePasswordSubmit = (e) => {
//     e.preventDefault();
//     // Validate and submit password change
//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       alert("New passwords don't match!");
//       return;
//     }
//     console.log('Password change submitted:', passwordData);
//     setShowPasswordModal(false);
//     setPasswordData({
//       oldPassword: '',
//       newPassword: '',
//       confirmPassword: ''
//     });
//   };

//   return (
//     <div className=" mx-auto p-4 max-w-6xl">
//       <h1 className="text-2xl font-bold mb-6">User Management</h1>

//       {/* User Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {editingId === user.id ? (
//                     <input
//                       type="text"
//                       value={user.name}
//                       onChange={(e) => handleUserChange(user.id, 'name', e.target.value)}
//                       className="border rounded px-2 py-1 w-full"
//                     />
//                   ) : (
//                     <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                   )}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {editingId === user.id ? (
//                     <input
//                       type="email"
//                       value={user.email}
//                       onChange={(e) => handleUserChange(user.id, 'email', e.target.value)}
//                       className="border rounded px-2 py-1 w-full"
//                     />
//                   ) : (
//                     <div className="text-sm text-gray-500">{user.email}</div>
//                   )}
//                 </td>

//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   {editingId === user.id ? (
//                     <button
//                       onClick={() => handleSave(user.id)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-3"
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(user.id)}
//                       className="text-indigo-600 hover:text-indigo-900 mr-3"
//                     >
//                       Edit
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Password Change Button */}
//       <button
//         onClick={() => setShowPasswordModal(true)}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Change Password
//       </button>

//       {/* Password Change Modal */}
//       {showPasswordModal && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//             <h2 className="text-xl font-bold mb-4">Change Password</h2>
//             <form onSubmit={handlePasswordSubmit}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="oldPassword">
//                   Old Password
//                 </label>
//                 <input
//                   type="password"
//                   id="oldPassword"
//                   name="oldPassword"
//                   value={passwordData.oldPassword}
//                   onChange={handlePasswordChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
//                   New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="newPassword"
//                   name="newPassword"
//                   value={passwordData.newPassword}
//                   onChange={handlePasswordChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//                   Confirm New Password
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={passwordData.confirmPassword}
//                   onChange={handlePasswordChange}
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                   required
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setShowPasswordModal(false)}
//                   className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  fetchAllUsers,
  updateUserById,
  adminUpdatePassword,
} from "../../redux/user/userThunks";
import { FaPassport } from "react-icons/fa";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user.users);

  const [editingId, setEditingId] = useState(null);
  const [editableUsers, setEditableUsers] = useState([]);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [selectedUserId, setSelectedUserId] = useState(null);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Fetch users on mount
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  // Sync Redux users to local editable state
  useEffect(() => {
    if (user) setEditableUsers(user);
  }, [user]);

  // Edit handler
  const handleEdit = (id) => setEditingId(id);

  // Save handler
  const handleSave = async (id) => {
    const userToUpdate = editableUsers.find((user) => user._id === id);
    dispatch(ShowLoading());

    try {
      const result = await dispatch(
        updateUserById({ id, userData: userToUpdate })
      );
      if (updateUserById.fulfilled.match(result)) {
        toast.success("User updated");
        setEditingId(null);
        dispatch(fetchAllUsers());
      } else {
        toast.error("Failed to update user");
      }
    } catch (err) {
      console.log(err);

      toast.error("Error updating user");
    } finally {
      dispatch(HideLoading());
    }
  };

  // Local user input change
  const handleUserChange = (id, field, value) => {
    setEditableUsers((prev) =>
      prev.map((user) => (user._id === id ? { ...user, [field]: value } : user))
    );
  };

  // Password input change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  // Password form submit
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("New passwords don't match");
      return;
    }
    dispatch(ShowLoading());

    try {
      const result = await dispatch(
        adminUpdatePassword({
          userId: selectedUserId, // 👈 not the logged-in user!
          ...passwordData,
        })
      );
      if (adminUpdatePassword.fulfilled.match(result)) {
        toast.success("Password changed successfully");
        setShowPasswordModal(false);
        setPasswordData({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } else {
        toast.error(result.payload || "Failed to change password");
      }
    } catch (err) {
      toast.error("Error changing password");
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <h1 className='text-2xl font-bold mb-6'>User Management</h1>

      {/* Table */}
      <div className='bg-white shadow-md rounded-lg overflow-hidden mb-8'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                Email
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                Role
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                Actions
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>
                Change Password
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {editableUsers?.map((user) => (
              <tr key={user._id}>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {editingId === user._id ? (
                    <input
                      type='text'
                      value={user.name}
                      onChange={(e) =>
                        handleUserChange(user._id, "name", e.target.value)
                      }
                      className='border rounded px-2 py-1 w-full'
                    />
                  ) : (
                    <div className='text-sm font-medium text-gray-900'>
                      {user.name}
                    </div>
                  )}
                </td>

                <td className='px-6 py-4 whitespace-nowrap'>
                  {editingId === user._id ? (
                    <input
                      type='email'
                      value={user.email}
                      onChange={(e) =>
                        handleUserChange(user._id, "email", e.target.value)
                      }
                      className='border rounded px-2 py-1 w-full'
                    />
                  ) : (
                    <div className='text-sm text-gray-500'>{user.email}</div>
                  )}
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  {editingId === user._id ? (
                    <input
                      type='text'
                      value={user.role}
                      readOnly
                      disabled
                      className='border-0  rounded px-2 py-1 w-full'
                    />
                  ) : (
                    <div className='text-sm  text-green-500'>{user.role}</div>
                  )}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                  {editingId === user._id ? (
                    <button
                      onClick={() => handleSave(user._id)}
                      className='text-indigo-600 hover:text-indigo-900 mr-3'
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user._id)}
                      className='text-indigo-600 hover:text-indigo-900 mr-3'
                    >
                      Edit
                    </button>
                  )}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                  <button
                    onClick={() => {
                      setSelectedUserId(user._id);
                      setShowPasswordModal(true);
                    }}
                    className='bg-blue-500 hover:bg-blue-700 p-2 ml-5 text-white font-bold  rounded'
                  >
                    <FaPassport />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Change Password Button */}

      {/* Password Modal */}
      {showPasswordModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4'>
          <div className='bg-white rounded-lg shadow-xl max-w-md w-full p-6'>
            <h2 className='text-xl font-bold mb-4'>Change Password</h2>
            <form onSubmit={handlePasswordSubmit}>
              {["oldPassword", "newPassword", "confirmPassword"].map(
                (field) => (
                  <div className='mb-4' key={field}>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                      {field
                        .replace("Password", " Password")
                        .replace(/^./, (c) => c.toUpperCase())}
                    </label>
                    <input
                      type='password'
                      name={field}
                      value={passwordData[field]}
                      onChange={handlePasswordChange}
                      required
                      className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    />
                  </div>
                )
              )}
              <div className='flex justify-end'>
                <button
                  type='button'
                  onClick={() => setShowPasswordModal(false)}
                  className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
