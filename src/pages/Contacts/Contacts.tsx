import { useState, useEffect } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useAppSelector, useAppDispatch } from 'hooks';
import { ContactCard } from 'components/Cards';
import { getContacts } from 'services/contactsApi';
import { setContactList } from 'redux/slicers';

export function Contacts() {
  const [searchField, setSearchField] = useState('');
  const { currentUser, contactsList } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const contacts = contactsList.filter((e: any) => e.name?.toLowerCase()
    .includes(searchField.toLowerCase()));

  useEffect(() => {
    getContacts(currentUser.id).then((res) => dispatch(setContactList(res)));
  }, []);

  return (
    <>
      <Header />
      <div className="contacts-container">
        <div className="welcome-user">
          <p>
            Welcome
            {' '}
            {currentUser.email.split('@')[0]}
            !
          </p>
          <p>
            You have
            {' '}
            {contactsList.length}
            {' '}
            contacts.
          </p>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search contact"
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </div>
        <div className="contacts">
          {contacts.map(({
            id, name, email, telephone, whatsapp,
          }) => (
            <ContactCard
              key={id}
              id={id}
              name={name}
              email={email}
              telephone={telephone}
              whatsapp={!!whatsapp}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
