import { Visitor } from './Visitor';
import { Logged } from './Logged';

export function Header() {
  return (
    <header className="header">
      <Visitor />
      <Logged />
    </header>
  );
}
