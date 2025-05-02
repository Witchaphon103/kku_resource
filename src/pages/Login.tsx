import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      await login(username, password);
      setMessage('เข้าสู่ระบบสำเร็จ ✅');
      setTimeout(() => {
        navigate('/');
      }, 1000); // รอ 1 วิให้เห็นข้อความก่อน
    } catch (err) {
      setMessage('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>เข้าสู่ระบบ</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ display: 'block', marginBottom: 10, width: '100%' }}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'Sign In'}
        </button>
        {message && (
          <p style={{ color: message.includes('สำเร็จ') ? 'green' : 'red' }}>{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;
