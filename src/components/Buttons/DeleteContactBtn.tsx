import { useParams } from 'react-router-dom';

export function DeleteContactBtn() {
  const { id } = useParams<{ id: string }>();
  const handleDelete = () => {
    console.log('deletou toda');
  };

  return (
    <div className="delete-contact">
      <button onClick={} type="button" className="delete-btn">DELETE</button>
    </div>
  );
}
