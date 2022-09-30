import { useState } from 'react';
import { createUser } from 'services';
import { useNavigate } from 'react-router-dom';
import { ErrorHandler } from 'components/Messages';

export function SignUpForm() {
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({ status: false, message: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    try {
      if (password !== passwordConfirmation) {
        throw new Error('Passwords do not match');
      }
      if (!userEmail || !password) {
        throw new Error('Email and password are required');
      }
      await createUser({ userEmail, password });
      navigate('/contacts');
    } catch (err) {
      setError({ status: true, message: `${err}` });
    }
  };
  return (
    <div className="signup-form-container">
      <section className="signup-form">
        <h1>Welcome To iContacts</h1>
        <h4>Setup your account now for FREE</h4>
        <ErrorHandler error={error.status} message={error.message} />
        <section className="form-container">
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
