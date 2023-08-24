import { ConfigProvider } from 'antd';
import './App.css';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  return (
    <ConfigProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}
export default App;
