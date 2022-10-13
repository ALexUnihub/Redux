import { useState } from "react";
import { useDispatch } from "react-redux";
// auth saga/redux
import { loginRequest } from '../../reducer/authSlice';
import './Login.css';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginRequest({ userName, userPassword }));
  }

  const handleRegister = () => {
    console.log('register');
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
        <button
          onClick={props.isRegister ? handleRegister : handleLogin}
        >{props.isRegister ? 'Register' : 'Login'}</button>
      </div>
    </div>
  );
}