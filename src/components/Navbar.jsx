import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full h-[60px] flex items-center justify-between mb-10 px-6 text-lg">
      <nav>
        <ul className="flex gap-2">
          <li>
            <NavLink to="/" className={'w-16 block text-center py-1'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className={'w-16 block text-center py-1'}>
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink className="py-1 px-6 rounded-3xl border-2 border-primary hover:bg-primary hover:text-background transition-colors duration-300">
        Author
      </NavLink>
    </header>
  );
}
