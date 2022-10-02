import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Registration, Contacts, Login, AddContact,
} from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/add-contact" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
}
