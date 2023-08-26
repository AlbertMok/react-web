import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Page from '../pages';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Layout from '@/layouts';
import { Empty } from 'antd';
import Articles from '@/pages/articles';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/page',
        element: <Page />,
        id: 'page'
      },
      {
        path: '/home',
        element: <Home />,
        id: 'home'
      },
      {
        path: '/about',
        element: <About />,
        id: 'about'
      },
      {
        path: '/articles',
        element: <Articles />,
        id: 'articles'
      }
    ]
  },
  {
    path: '*',
    element: (
      <div className="empty">
        <Empty />
      </div>
    )
  }
];

const router = createBrowserRouter(routes);

export { routes, router };
