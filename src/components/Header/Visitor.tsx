import { MdContactPhone } from 'react-icons/md';
import { LoginModal } from '../Modals';

export function Visitor() {
  return (
    <div className="menu-header">
      <div className="logo-space">
        <MdContactPhone size="2rem" />
        <span className="logo-text">iContacts</span>
      </div>
      <LoginModal />
    </div>
  );
}
