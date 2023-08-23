import { NavLink } from 'react-router-dom';

interface NavItemProps {
  path: string;
  name: string | undefined;
}

function NavItem({ path, name }: NavItemProps) {
  return (
    <>
      <NavLink className="route-text" to={path}>
        {name}
      </NavLink>
    </>
  );
}

export default NavItem;
