import { RouteObject, createBrowserRouter } from 'react-router-dom';
import Page from '../pages';
import About from '@/pages/About';
import Home from '@/pages/Home';
import Layout from '@/layouts';

type RouteItem = RouteObject & {
  meta: {
    title: string;
  };
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    id: 'base',
    children: [
      {
        path: '/',
        element: <Page />,
        id: 'page'
      },
      {
        path: '/',
        element: <Home />,
        id: 'home'
      },
      {
        path: '/',
        element: <About />,
        id: 'about'
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export { routes, router };
