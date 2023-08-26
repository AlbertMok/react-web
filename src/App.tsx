import { ConfigProvider } from 'antd';
import { Suspense } from 'react';
import { Loading } from './components/Loading';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
  return (
    <div id="app">
      <ConfigProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ConfigProvider>
    </div>
  );
}
export default App;
