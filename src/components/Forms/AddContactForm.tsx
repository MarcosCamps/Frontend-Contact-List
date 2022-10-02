import { useState } from 'react';
import { createContact } from 'services';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { ErrorHandler } from 'components/Messages';

export function AddContactForm() {
  const { currentUser } = useAppSelector((state) => state);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [whatsapp, setWhatsapp] = useState(false);
  const [error, setError] = useState({ message: '', status: false });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    const result = await createContact({
      userId: currentUser.id, name, email, telephone, whatsapp,
    });
    if (!result) {
      setError({ status: true, message: 'Error creating contact' });
      return;
    }
    navigate('/contacts');
  };
  return (
    <div className="form-container">
      <section className="section-form">
        <h1>Add a new Contact</h1>
        <h4>Name field is mandatory</h4>
        <ErrorHandler error={error.status} message={error.message} />
        <section className="section-container">
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
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
            <label htmlFor="phone-number">
              Phone Number
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </label>
            <div className="checkbox-container">
              <label htmlFor="whatsapp">
                <input
                  type="checkbox"
                  name="whatsapp"
                  id="whatsapp"
                  onChange={() => setWhatsapp((prev) => !prev)}
                  checked={whatsapp}
                />
                Is this a WhatsApp number?
              </label>
            </div>
            <button type="submit">ADD CONTACT</button>
          </form>
        </section>
      </section>
    </div>
  );
}
