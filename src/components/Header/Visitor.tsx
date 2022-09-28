import { MdContactPhone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export function Visitor() {
  const navigate = useNavigate();
  return (
    <div className="menu-header">
      <div className="logo-space">
        <MdContactPhone size="2rem" />
        <span className="logo-text">iContacts</span>
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
