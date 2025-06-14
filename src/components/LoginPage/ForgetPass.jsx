import React, { useState } from 'react';
import './Login_Register.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // إرسال الإيميل إلى backend (لاحقاً)
    console.log('Password reset requested for:', email);

    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
      </div>

      {submitted ? (
        <div style={{ color: '#38bdf8', textAlign: 'center', marginTop: '1rem' }}>
          ✅ تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك.
        </div>
      ) : (
        <form className="inputs" onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit">إرسال رابط إعادة تعيين</button>
        </form>
      )}

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <span
          className="forgot_password"
          style={{ color: '#38bdf8', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          العودة إلى تسجيل الدخول
        </span>
      </div>
    </div>
  );
};

export default ForgotPassword;
