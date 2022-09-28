import { useState } from 'react';
import { createUser } from 'services';

export function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    console.log('submitting');
    const result = await createUser({ email, password });
    console.log(result);
  };
  return (
    <div className="signup-form-container">
      <section className="signup-form">
        <h1>Welcome To iContacts</h1>
        <h4>Setup your account now for FREE</h4>
        <section className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
