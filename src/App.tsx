import { ConfigProvider } from 'antd';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  return (
    <ConfigProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}
export default App;
