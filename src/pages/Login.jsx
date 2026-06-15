import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    // validation
    if (name.trim() === '') {
      setError('Please enter your name');
      return;
    }

    if (name.length < 3) {
      setError('Name should be at least 3 characters');
      return;
    }

    sessionStorage.setItem('loggedIn', 'true');
    sessionStorage.setItem('username', name);

    setError('');
    navigate('/dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="login-page">
        <h1>Mood Tracker</h1>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {error && <p className="error-text">{error}</p>}

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
