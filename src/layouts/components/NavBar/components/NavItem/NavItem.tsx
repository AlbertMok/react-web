import { NavLink } from 'react-router-dom';
import './style.scss';
interface NavItemProps {
  path: string;
  name: string | undefined;
}

function NavItem({ path, name }: NavItemProps) {
  return (
    <div className="nav-item">
      <NavLink className="route-text" to={path}>
        {name}
      </NavLink>
    </div>
  );
}

export default NavItem;
