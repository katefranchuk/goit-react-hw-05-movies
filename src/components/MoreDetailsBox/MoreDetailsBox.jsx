import { NavLink, Outlet } from 'react-router-dom';
import { DetailsList } from './MoreDetailsBox.styled';

export const MoreDetailsBox = () => {
  return (
    <div>
      <DetailsList>
        <li>
          <NavLink to={'cast'}>Cast</NavLink>
        </li>

        <li>
          <NavLink to={'reviews'}>Reviews</NavLink>
        </li>
      </DetailsList>
      <Outlet />
    </div>
  );
};
