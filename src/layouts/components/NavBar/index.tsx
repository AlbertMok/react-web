import './style.scss';
import { useState } from 'react';
import NavItem from './components/NavItem/NavItem';
import { routes } from '@/routers';
import { RouteObject } from 'react-router-dom';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

// 导航栏
function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={drawerOpen ? 'navbar open' : 'navbar'}>
      {/* 主体 */}
      <div className="nav-main">{NavItems(routes)}</div>

      {/* 边缘部分 */}
      <div className="nav-edge">
        <button className="expand-button" onClick={handleClick}>
          <span>
            {!drawerOpen ? <MenuOutlined style={{ fontSize: 20 }} /> : <CloseOutlined style={{ fontSize: 20 }} />}
          </span>
        </button>
      </div>
    </div>
  );
}

// 路由导航组件
function NavItems(routes: RouteObject[]) {
  let routeList: RouteObject[] = [];

  // 将子路由放入新的路由组里面
  routes.map((route) => {
    route.children?.map((route) => routeList.push(route));
  });

  const NavItems_ = routeList.map((route) => <NavItem key={route.id} path={route.path as string} name={route.id} />);

  return <>{NavItems_}</>;
}

export default NavBar;
