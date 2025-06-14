import React, { useState } from 'react';
import './Login_Register.css'; // إعادة استخدام نفس التنسيقات
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('user'); // user | store
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const isUser = mode === 'user';

  const handleLogin = (e) => {
  e.preventDefault();

  // تحقق وهمي مؤقت
  if (email === 'user@test.com' && password === '123456') {
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('role', mode); // user أو store
    navigate('/');
  } else {
    alert('❌ البريد أو كلمة المرور غير صحيحة (تجريب)');
  }
};


  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <button
            className="submit"
            style={{ backgroundColor: isUser ? '#0ea5e9' : '#334155' }}
            onClick={() => setMode('user')}
          >
            كمستخدم
          </button>
          <button
            className="submit"
            style={{ backgroundColor: !isUser ? '#0ea5e9' : '#334155' }}
            onClick={() => setMode('store')}
          >
            كمتجر
          </button>
        </div>
      </div>

      <form className="inputs" onSubmit={handleLogin}>
        <div className="input">
          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit">دخول</button>
      </form>

      <div style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
        <div className="forgot_password">
  Forget Password
  <span
    style={{ color: '#38bdf8', cursor: 'pointer', marginLeft: '5px' }}
    onClick={() => navigate('/Forget_passowrd')}
  >
    Forget Password
  </span>
</div>

        <div className="forgot_password">
          Don't have an account?
          <span
            style={{ color: '#38bdf8', cursor: 'pointer', marginLeft: '5px' }}
            onClick={() => navigate('/Login_Register')}
          >
            Register
          </span>
        </div>
      </div>

     

    
    </div>
  );
};

export default Login;
