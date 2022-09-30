import { Header } from 'components/Header';
import { useAppSelector } from 'hooks';
import { ContactCard } from 'components/Cards';

export function Contacts() {
  const { currentUser } = useAppSelector((state) => state);
  return (
    <>
      <Header />
      <div className="contacts-container">
        <div className="welcome-user">
          <p>
            Welcome
            {' '}
            {currentUser.email}
          </p>
          <p>Here you can see all your contacts</p>
        </div>
        <div className="contacts">
          <ContactCard />
        </div>
      </div>
    </>
  );
}
