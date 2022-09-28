import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Registration, Contacts } from 'pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
