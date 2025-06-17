import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchCurrentUser } from "../redux/user/userThunks";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await dispatch(fetchCurrentUser()).unwrap();
      } catch (err) {
        toast.error("Session expired. Please login again.");
      } finally {
        setCheckedAuth(true); // 🔁 Mark that auth check is done
      }
    };

    if (!user) {
      checkUser();
    } else {
      setCheckedAuth(true);
    }
  }, [user, dispatch]);

  if (!checkedAuth) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
};

export default ProtectedRoute;
