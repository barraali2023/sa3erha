// import React from 'react';

// import person from './pic/person.svg';
// import mail from './pic/mail.svg';
// import password from './pic/lock.svg';
// import './Login_Register.css';
// import { Link } from 'react-router-dom';
// export const Login_Register = () => {
//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">Sign In</div>
//       </div>

//       <div className="inputs">
//         <div className="input">
//           <img src={person} alt="User" />
//           <input type="text" placeholder="Name" />
//         </div>
//         <div className="input">
//           <img src={mail} alt="Email" />
//           <input type="email" placeholder="Email" />
//         </div>
//         <div className="input">
//           <img src={password} alt="Password" />
//           <input type="password" placeholder="Password" />
//         </div>
//         <div className="input">
//           <img src={password} alt="Confirm Password" />
//           <input type="password" placeholder="Confirm Your Password" />
//         </div>
//       </div>

//       <div className="submit">Sign In</div>
//       <Link className='forgot_password'>Log In</Link>
//       <div className="forgot_password">Forgot Your Password?</div>
//     </div>
//   );
// };

// export default Login_Register;

import React, { useState } from 'react';
import person from '../../pic/person.svg';
import mail from '../../pic/mail.svg';
import password from '../../pic/lock.svg';
import './Login_Register.css';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login_Register = () => {
  const [mode, setMode] = useState('user'); // 'user' or 'store'
  const isUser = mode === 'user';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
const [username, setUsername] = useState('');




  // حالات الإدخال
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

  const handleRegister = () => {
  if (passwordValue.length < 6) {
    toast.error('❌ كلمة المرور يجب أن تكون 6 أحرف أو أكثر');
    return;
  }

  if (passwordValue !== confirmPasswordValue) {
    toast.error('❌ كلمات المرور غير متطابقة');
    return;
  }

  const userData = {
    email,
    password: passwordValue,
    role: mode,
    username,
  };

  localStorage.setItem('user', JSON.stringify(userData));
  localStorage.setItem('token', 'fake-jwt-token');
  localStorage.setItem('role', userData.role);
  localStorage.setItem('username', userData.username);

  toast.success('✅ تم إنشاء الحساب وتسجيل الدخول');
  navigate('/');
};


  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
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

      <div className="inputs">
        <div className="input">
          <img src={person} alt="User" />
          <input
  type="text"
  placeholder="اسم المستخدم"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
        </div>

        <div className="input">
          <img src={mail} alt="Email" />
          <input
  type="email"
  placeholder="البريد الإلكتروني"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

        </div>

        <div className="input">
          <img src={mail} alt="Phone" />
          <input type="text" placeholder="رقم الهاتف" />
        </div>

        {isUser && (
          <>
            <div className="input">
              <img src={person} alt="First Name" />
              <input type="text" placeholder="الاسم الأول" />
            </div>
            <div className="input">
              <img src={person} alt="Last Name" />
              <input type="text" placeholder="الاسم الأخير" />
            </div>
          </>
        )}

        {!isUser && (
          <div className="input">
            <img src={person} alt="Store Name" />
            <input type="text" placeholder="اسم المتجر" />
          </div>
        )}

        <div className="input">
          <img src={password} alt="Password" />
          <input
            type="password"
            placeholder="كلمة المرور"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password} alt="Confirm Password" />
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPasswordValue}
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
          />
        </div>
      </div>

      <button className="submit" onClick={handleRegister}>تسجيل</button>

      <div style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }}>
        <div className="forgot_password">
          <span
            style={{ color: '#38bdf8', cursor: 'pointer' }}
            onClick={() => navigate('/Forget_passowrd')}
          >
            نسيت كلمة المرور؟
          </span>
        </div>

        <div className="forgot_password">
          لديك حساب بالفعل؟
          <span
            style={{ color: '#38bdf8', cursor: 'pointer', marginLeft: '5px' }}
            onClick={() => navigate('/login')}
          >
            تسجيل الدخول
          </span>
        </div>
      </div>

      <div className="social-divider">أو سجل باستخدام</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            toast.success('✅ دخول Google (وهمي)');
            localStorage.setItem('token', 'google-fake-token');
            navigate('/');
          }}
          onError={() => toast.error('❌ فشل تسجيل الدخول بـ Google')}
        />
        <button className="submit" style={{ backgroundColor: '#3b5998', color: 'white' }}>
          تسجيل بـ Facebook
        </button>
      </div>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  );
};

export default Login_Register;
