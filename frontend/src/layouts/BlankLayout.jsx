// ** React Imports
import { Outlet } from 'react-router-dom';

function BlankLayout() {
  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default BlankLayout;
