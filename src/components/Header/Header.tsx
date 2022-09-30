import { useAppSelector } from 'hooks';
import { Visitor } from './Visitor';
import { Logged } from './Logged';

export function Header() {
  const { token } = useAppSelector((state) => state.currentUser);
  return (
    <header className="header">
      {token ? <Logged /> : <Visitor />}
    </header>
  );
}
