import { ConfigProvider } from 'antd';
import './App.css';
import { Suspense } from 'react';
import { Loading } from './components/Loading';

function App() {
  return (
    <ConfigProvider>
      <Suspense fallback={<Loading />}></Suspense>
    </ConfigProvider>
  );
}
export default App;
