import { MdContactPhone } from 'react-icons/md';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

export function Visitor() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== '/' && pathname !== '/login') {
      navigate('/login');
    }
  }, [pathname]);

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
