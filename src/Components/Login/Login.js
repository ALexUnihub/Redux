import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../Auth/auth";
// auth saga/redux
import { loginRequest } from '../../reducer/authSlice';
import './Login.css';

export default function Login() {
  // const auth = useAuth();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    // auth.login(user);
    dispatch(loginRequest({ userName, userPassword }));
    navigate('/api', { replace: true });
  }

  return (
    <div className='container__login'>
      <div className='login__wrapper'>
        <div>
          <p>Username</p>
          <input type='text' onChange={event => setUserName(event.target.value)} />
        </div>
        <div>
          <p>Password</p>
          <input type='text' onChange={event => setUserPassword(event.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}