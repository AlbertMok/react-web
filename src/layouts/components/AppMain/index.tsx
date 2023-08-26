import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '@/components/Loading';

const AppMain = () => {
  return (
    <div className="app-main">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppMain;
