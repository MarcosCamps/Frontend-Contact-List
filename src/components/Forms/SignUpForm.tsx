export function SignUpForm() {
  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
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
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" name="password" id="password" />
            </label>
            <label htmlFor="confirm-password">
              Confirm password
              <input type="password" name="confirm-password" id="confirm-password" />
            </label>
            <button type="submit">SIGN UP</button>
          </form>
        </section>
      </section>
    </div>
  );
}
