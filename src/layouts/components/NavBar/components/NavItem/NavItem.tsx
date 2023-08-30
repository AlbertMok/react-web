import { NavLink } from 'react-router-dom';
import './style.scss';
interface NavItemProps {
  path: string;
  name: string | undefined;
}

function NavItem({ path, name }: NavItemProps) {
  return (
    <>
      <NavLink className="route-text" to={path}>
        {({ isActive }) => <span className={isActive ? 'nav-item active' : 'nav-item'}> {name}</span>}
      </NavLink>
    </>
  );
}

export default NavItem;
