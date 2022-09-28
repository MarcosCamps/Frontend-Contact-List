import { Header } from 'components/Header';
import './styles/Contacts.styles.scss';

export function Contacts() {
  return (
    <>
      <Header />
      <div>
        <section className="contact-form">
          <h1>My Contacts</h1>
          <div>
            <form>
              <label htmlFor="email">
                Register Email
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="telephone">
                Register Telephone
                <input type="text" name="telephone" id="telephone" />
              </label>
              <label htmlFor="whatsapp">
                Does this number have WhatsApp?
                <input type="checkbox" name="whatsapp" id="whatsapp" />
              </label>
              <button type="submit">REGISTER</button>
            </form>
          </div>
          <div className="list-container">
            <h2>Contacts List</h2>

            <table>
              <tr>
                <th>Email</th>
                <th>Telephone</th>
                <th>WhatsApp</th>
              </tr>
              <tr>
                <td />
              </tr>
              <tr>
                <td />
              </tr>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
