import { MdContactPhone } from 'react-icons/md';
import { useNavigate, Link } from 'react-router-dom';

export function Visitor() {
  const navigate = useNavigate();
  return (
    <div className="menu-header">
      <div className="logo-space">
        <Link to="/">
          <MdContactPhone size="2rem" />
        </Link>
        <Link to="/">
          <span className="logo-text">iContacts</span>
        </Link>
      </div>
      <button
        onClick={() => navigate('/login')}
        type="button"
      >
        LOGIN
      </button>
    </div>
  );
}
