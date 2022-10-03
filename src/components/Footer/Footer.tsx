import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { logoutUser } from 'redux/slicers';

export function Footer() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <footer className="footer">
      {currentUser.id && (
        <button onClick={handleLogout} type="button" className="logout-btn">Logout</button>
      )}
    </footer>
  );
}
