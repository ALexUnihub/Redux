import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Auth/auth";

export default function Login() {
  const auth = useAuth();
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate('/api');
  }

  return (
    <div>
      <label>
        Username:{' '}
        <input type='text' onChange={event => setUser(event.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogin}>Register</button> */}
    </div>
  );
}