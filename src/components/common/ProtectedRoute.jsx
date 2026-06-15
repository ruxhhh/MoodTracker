import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isLoggedIn = sessionStorage.getItem('loggedIn');

  return isLoggedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
