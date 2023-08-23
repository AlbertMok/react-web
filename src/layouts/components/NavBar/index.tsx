import { useState } from 'react';
import NavItem from './components/NavItem/NavItem';
import { routes } from '@/routers';
import { RouteObject } from 'react-router-dom';
import './style.less';

const NavItemList = (routes: RouteObject[]) => {
  const NavItems = routes.map((route) => (
    <li key={route.id}>
      <button className="nav-button">
        <NavItem path={route.path as string} name={route.id} />
      </button>
    </li>
  ));
  return <ul>{NavItems}</ul>;
};

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <div className={drawerOpen ? 'navbar open' : 'navbar'}>
        <div className="nav-main">{NavItemList(routes)}</div>
        <div className="nav-edge">
          <button className="expand-button">
            <span className="icon-container">asd</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
