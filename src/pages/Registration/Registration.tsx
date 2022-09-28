import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SignUpForm } from 'components/Forms';
import './styles/Registration.styles.css';

export function Registration() {
  return (
    <>
      <Header />
      <SignUpForm />
      <Footer />
    </>
  );
}
