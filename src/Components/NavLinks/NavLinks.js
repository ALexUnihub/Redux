import './NavLinks.css';
import { NavLink, Outlet } from "react-router-dom";
import AlertElement from '../Alerts/Alerts';

export default function NavBar(props) {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      color: '#000',
    }
  }

  return (
    <>
    <div className='nav__login'>
      <NavLink to={'/login'}  style={navLinkStyles}>
        Login
      </NavLink>
      <NavLink to={'/register'}  style={navLinkStyles}>
        Register
      </NavLink>
      <AlertElement color={'red'}/>
      
    </div>
    <Outlet />
    </>
  );
}