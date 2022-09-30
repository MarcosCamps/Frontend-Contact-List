import { MdContactPhone } from 'react-icons/md';
import { TbSearch } from 'react-icons/tb';
import { IoMdAddCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

export function Logged() {
  return (
    <>
      <div className="menu-header">
        <div className="logo-space">
          <Link to="/contacts">
            <MdContactPhone size="2rem" />
          </Link>
          <Link to="/contacts">
            <span className="logo-text">iContacts</span>
          </Link>
        </div>
        <div className="search-bar">
          <TbSearch size="1.5rem" />
        </div>
      </div>
      <div className="floating-add">
        <Link to="/add-contact">
          <IoMdAddCircle size="3rem" />
        </Link>
      </div>
    </>
  );
}
