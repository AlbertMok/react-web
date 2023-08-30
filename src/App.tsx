import { ConfigProvider } from 'antd';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import Loading from './components/Loading';

function App() {
  return (
    <ConfigProvider>
      <Suspense fallback={Loading()}>
        <RouterProvider router={router} />
      </Suspense>
    </ConfigProvider>
  );
}
export default App;
