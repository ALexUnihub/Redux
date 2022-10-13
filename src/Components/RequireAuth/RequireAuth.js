import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUser, getIsLogin } from '../../reducer/authSlice';
import AlertElement from "../Alerts/Alerts";
import Header from "../Header/Header";

export default function RequireAuth() {
  const isLogin = useSelector(getIsLogin);

  if (!isLogin) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      <Header />
      <div className="app__wraper">
        <AlertElement color={'green'}/>
      </div>
      <Outlet />
    </div>
  );
}