import { useState } from 'react';
import { createUser } from 'services';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks';
import { setCurrentUser } from 'redux/slicers';
import { ErrorHandler } from 'components/Messages';

export function SignUpForm() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({ status: false, message: '' });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      if (password !== passwordConfirmation) {
        throw new Error('Passwords do not match');
      }
      if (!userEmail || !password) {
        throw new Error('Email and password are required');
      }
      const result = await createUser({ userEmail, password });
      dispatch(setCurrentUser({ email: userEmail, id: result.id, token: result.token }));
      navigate('/contacts');
    } catch (err) {
      setError({ status: true, message: `${err}` });
    }
  };
  return (
    <div className="form-container">
      <section className="section-form">
        <h1>Welcome To iContacts</h1>
        <ErrorHandler error={error.status} message={error.message} />
        <section className="section-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
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
            <label htmlFor="confirm-password">
              Confirm password
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </label>
            <button type="submit">SIGN UP</button>
          </form>
        </section>
      </section>
    </div>
  );
}
