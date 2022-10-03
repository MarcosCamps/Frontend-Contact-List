import { useState } from 'react';
import { updateContact } from 'services';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { ErrorHandler } from 'components/Messages';
import { DeleteContactBtn } from 'components/Buttons';

export function EditContactForm() {
  const { id } = useParams();
  const { contactsList } = useAppSelector((state) => state);
  const currentContact: any = contactsList.find((contact: any) => contact.id === Number(id));
  const [name, setName] = useState(currentContact.name);
  const [email, setEmail] = useState(currentContact.email);
  const [telephone, setTelephone] = useState(currentContact.telephone);
  const [whatsapp, setWhatsapp] = useState(!!currentContact.whatsapp);
  const [error, setError] = useState({ message: '', status: false });
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent): Promise<void> => {
    e.preventDefault();
    const result = await updateContact({
      id: Number(id), name, email, telephone, whatsapp: !!whatsapp,
    });
    console.log(result);
    if (!result) {
      setError({ status: true, message: 'Error updating contact' });
      return;
    }
    navigate('/contacts');
  };
  return (
    <div className="form-container">
      <section className="section-form">
        <h1>Edit Contact</h1>
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
            <button type="submit">UPDATE CONTACT</button>
            <DeleteContactBtn />
          </form>
        </section>
      </section>
    </div>
  );
}
