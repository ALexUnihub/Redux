import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// auth saga/redux
import { loginRequest, registerRquest, getIsLogin } from '../../reducer/authSlice';
import './Login.css';

export default function Login(props) {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useDispatch();

  const isLogin = useSelector(getIsLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogin) {
      navigate('/characters');
    }
  }, [isLogin]);


  const hadnleAuth = () => {
    if (props.isRegister) {
      dispatch(registerRquest({ userName, userPassword }));
    } else {
      dispatch(loginRequest({ userName, userPassword }));
    }
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
          onClick={hadnleAuth}
        >{props.isRegister ? 'Register' : 'Login'}</button>
      </div>
    </div>
  );
}