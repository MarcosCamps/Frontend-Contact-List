import { Link } from 'react-router-dom';

export function LoginForm() {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
  };
  return (
    <div className="login-form-container">
      <section className="login-form">
        <h1>Login</h1>
        <section className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" />
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
