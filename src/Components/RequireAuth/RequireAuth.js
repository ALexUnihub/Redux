import { Navigate } from "react-router-dom";
import { useAuth } from "../../Auth/auth";


export default function RequireAuth({ children }) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to='/' />
  }

  return children;
}