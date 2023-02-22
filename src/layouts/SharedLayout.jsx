import { PageHeader } from 'components/PageHeader/PageHeader';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <PageHeader />
      <main>{<Outlet />}</main>
    </div>
  );
};

export default SharedLayout;
