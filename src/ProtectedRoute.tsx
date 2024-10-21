import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// import { clearAuthState } from './store/slices/AuthSlice';
// import Cookies from 'js-cookie';
// import { useDisconnect } from 'wagmi';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

interface RootState {
  auth: {
    isAuthenticated: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
  };
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const location = useLocation();

  // const dispatch = useDispatch();

  // Using wagmi's useDisconnect hook
  // const { disconnect } = useDisconnect();

  // const jwtToken = Cookies.get('jwt');

  // if (status === 'loading') {
  //   return <div>Loading...</div>;
  // }

  // if (!jwtToken) {
  //   dispatch(clearAuthState());
  //   disconnect();
  //   return (<Navigate to="/" state={{ from: location }} replace />);
  // }

  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
