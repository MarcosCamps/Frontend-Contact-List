import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Registration, Contacts, Login, AddContact, ContactDetails,
} from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<ContactDetails />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}
