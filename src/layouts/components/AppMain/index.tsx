import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppMain = () => {
  return (
    <div className="app-main">
      <Suspense fallback={Loading()}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppMain;
