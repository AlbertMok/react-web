import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Page from '../pages';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Layout from '@/layouts';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    id: '1',
    children: [
      {
        path: '/',
        id: 'home',
        element: <Home />
      }
    ]
  },
  {
    id: 'page',
    path: '/page',
    element: <Page />
  },
  {
    id: 'about',
    path: '/about',
    element: <About />
  }
];

const router = createBrowserRouter(routes);

export default router;
