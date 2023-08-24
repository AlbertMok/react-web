import './style.less';
import { useState } from 'react';
import NavItem from './components/NavItem/NavItem';
import { routes } from '@/routers';
import { RouteObject } from 'react-router-dom';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

const NavItemList = (routes: RouteObject[]) => {
  const NavItems = routes.map((route) => (
    <li key={route.id}>
      <button className="nav-button">
        <NavItem path={route.path as string} name={route.id} />
      </button>
    </li>
  ));
  return <ul className="nav-main-ul">{NavItems}</ul>;
};

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <div className={drawerOpen ? 'navbar open' : 'navbar'}>
        {/* 主体 */}
        <div className="nav-main">{NavItemList(routes)}</div>

        {/* 边缘部分 */}
        <div className="nav-edge">
          <button className="expand-button" onClick={handleClick}>
            <span>
              {!drawerOpen ? <MenuOutlined style={{ fontSize: 20 }} /> : <CloseOutlined style={{ fontSize: 20 }} />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
