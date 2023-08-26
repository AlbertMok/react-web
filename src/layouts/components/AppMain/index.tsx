import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppMain = () => {
  return (
    <div className="app-main">
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AppMain;
