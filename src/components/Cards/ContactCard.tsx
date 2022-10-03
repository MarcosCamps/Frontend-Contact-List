import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IContacts } from 'interfaces/IContacts';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import { IoLogoWhatsapp, IoIosArrowForward } from 'react-icons/io';

export function ContactCard({
  id, name, email, telephone, whatsapp,
}: IContacts) {
  return (
    <>
      <div className="single-contact">
        <div className="contact-name">
          <Link to={`/contacts/${id}`}>
            { name }
          </Link>
        </div>
        <div className="contact-contacts">
          <div className="contact-email">
            {email
              ? (
                <a href={`mailto:${email}`}>
                  <AiFillMail size="1.7rem" color="#c0392b" />
                </a>
              )
              : (<AiFillMail size="1.7rem" color="gray" />)}
          </div>
          <div className="contact-phone">
            {telephone
              ? (
                <a href={`tel:${telephone}`}>
                  <AiFillPhone size="1.7rem" color="#2980b9" />
                </a>
              )
              : (<AiFillPhone size="1.7rem" color="gray" />)}
          </div>
          <div className="contact-whatsapp">
            {whatsapp
              ? (
                <a href={`http://api.whatsapp.com/send?phone=${whatsapp}`}>
                  <IoLogoWhatsapp size="1.7rem" color="green" />
                </a>
              )
              : (<IoLogoWhatsapp size="1.7rem" color="gray" />)}
          </div>
          <div className="contact-options">
            <Link to={`/contacts/${id}`}>
              <IoIosArrowForward size="1.7rem" color="#b1b0b0" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="divider" />
    </>
  );
}

ContactCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  email: propTypes.string,
  telephone: propTypes.string,
  whatsapp: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

ContactCard.defaultProps = {
  email: '',
  telephone: '',
  whatsapp: '',
};
