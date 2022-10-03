import { Header } from 'components/Header';
import { useAppSelector, useAppDispatch } from 'hooks';
import { ContactCard } from 'components/Cards';
import { getContacts } from 'services/contactsApi';
import { useEffect } from 'react';
import { setContactList } from 'redux/slicers';

export function Contacts() {
  const { currentUser, contactsList } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(currentUser);
    getContacts(currentUser.id).then((res) => dispatch(setContactList(res)));
  }, []);

  useEffect(() => {
    console.log(contactsList);
  }, [contactsList]);

  return (
    <>
      <Header />
      <div className="contacts-container">
        <div className="welcome-user">
          <p>
            Welcome
            {' '}
            {currentUser.email}
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
        <div className="contacts">
          {contactsList.map(({
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
    </>
  );
}
