import { MdContactPhone } from 'react-icons/md';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Logged() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showNewContactBtn: boolean = pathname !== '/add-contact';
  return (
    <div className="menu-header">
      <div className="logo-space">
        <Link to="/contacts">
          <MdContactPhone size="2rem" />
        </Link>
        <Link to="/contacts">
          <span className="logo-text">iContacts</span>
        </Link>
      </div>
      <div className="new-contact">
        {showNewContactBtn && (
          <button
            type="button"
            className="new-contact-button"
            onClick={() => navigate('/add-contact')}
          >
            New Contact
          </button>
        )}
      </div>
    </div>
  );
}
