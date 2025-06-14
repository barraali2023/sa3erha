import React, { useState } from 'react';
import './Login_Register.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../api/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('❌ كلمات المرور غير متطابقة');
      return;
    }

    try {
      await api.post('/auth/reset-password', { token, newPassword });
      toast.success('✅ تم تحديث كلمة المرور بنجاح');
      setTimeout(() => navigate('/login'), 2500);
    } catch (err) {
      toast.error('❌ فشل في تحديث كلمة المرور');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">إعادة تعيين كلمة المرور</div>
      </div>

      <form className="inputs" onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="password"
            placeholder="كلمة المرور الجديدة"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div className="input">
          <input
            type="password"
            placeholder="تأكيد كلمة المرور"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit">تحديث كلمة المرور</button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </div>
  );
};

export default ResetPassword;
