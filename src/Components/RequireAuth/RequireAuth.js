import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { useAuth } from "../../Auth/auth";
import { getUser } from '../../reducer/authSlice';


export default function RequireAuth({ children }) {
  const user = useSelector(getUser);
  
  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
}