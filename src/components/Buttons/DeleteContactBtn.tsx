import { useParams, useNavigate } from 'react-router-dom';
import { deleteContact } from 'services';

export function DeleteContactBtn() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteContact(Number(id));
    navigate('/contacts');
  };

  return (
    <div className="delete-contact">
      <button onClick={handleDelete} type="button" className="delete-btn">DELETE</button>
    </div>
  );
}
