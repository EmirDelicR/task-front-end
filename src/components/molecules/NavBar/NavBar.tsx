import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsApiKeySet } from 'store/selectors/contextSelector';

import { PageRoutes } from 'constants/constants';
import NavigationLink from './Link';

import './NavBar.scss';

function NavBar() {
  const isApiKeySet = useSelector(selectIsApiKeySet);

  return (
    <nav className="nav-bar">
      <NavigationLink className="nav-bar__element" to={{ pathname: PageRoutes.HOME_PAGE }}>
        Home
      </NavigationLink>
      {isApiKeySet && (
        <NavigationLink className="nav-bar__element" to={{ pathname: PageRoutes.ENCODING_PAGE }}>
          Data
        </NavigationLink>
      )}
    </nav>
  );
}

export default NavBar;
