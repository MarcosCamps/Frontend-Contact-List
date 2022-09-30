import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from 'services';
import { ErrorHandler } from 'components/Messages';
import { useAppDispatch } from 'hooks';
import { setCurrentUser } from 'redux/slicers';

export function LoginForm() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ status: false, message: '' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      if (!userEmail || !password) {
        throw new Error('Please fill in all fields');
      }
      const result = await loginUser({ userEmail, password });
      if (!result) throw new Error('Invalid credentials');
      dispatch(setCurrentUser({ email: userEmail, token: result.token }));
      navigate('/contacts');
    } catch (err) {
      setError({ status: true, message: `${err}` });
    }
  };
  return (
    <div className="login-form-container">
      <section className="login-form">
        <h1>Login</h1>
        <ErrorHandler error={error.status} message={error.message} />
        <section className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                id="email"
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="submit">LOGIN</button>
          </form>
          <p>
            Don&#39;t have an account?
            {' '}
            <Link to="/">Register</Link>
          </p>
        </section>
      </section>
    </div>
  );
}
