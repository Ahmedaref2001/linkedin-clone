import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const { user } = useSelector(state=>state.user);
  const location = useLocation();

    return (
      user ? <Outlet /> : <Navigate to="/" state={{ from: location.pathname }} />
    );
  
};


export default RequireAuth;
