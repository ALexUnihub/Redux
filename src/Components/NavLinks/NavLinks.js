import './NavLinks.css';
import { NavLink, useHref, useNavigate, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../reducer/authSlice';

export default function NavBar(props) {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const pararms = useHref();

  useEffect(() => {
    if (user) {
      navigate('/api', { replace: true });
    }
  }, [user]);

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  const showNavBar = !pararms.includes('api');

  return (
    <div>
      {showNavBar 
        ? <div className='nav__login'>
            <NavLink to={'/login'}  style={navLinkStyles}>
              Login
            </NavLink>
            <NavLink to={'/register'}  style={navLinkStyles}>
              Register
            </NavLink>
          </div>
        : null
      }
    </div>
  );
}