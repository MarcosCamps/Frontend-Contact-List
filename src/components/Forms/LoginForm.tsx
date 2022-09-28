import { Link } from 'react-router-dom';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <div className="login-form-container">
      <section className="login-form">
        <h1>Login</h1>
        <section className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <Link to="/register">Register</Link>
          </p>
        </section>
      </section>
    </div>
  );
}
