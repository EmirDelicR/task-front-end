import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setContext } from 'store/slices/contextSlice';

import { getStorageValue } from 'utils/localStorageHelper';
import { API_KEY } from 'constants/constants';

import RouterComponent from 'routes/routes';
import NavBar from './molecules/NavBar/NavBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const key = getStorageValue(API_KEY);
    if (key) {
      dispatch(setContext({ isApiKeySet: true, apiKey: key }));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <RouterComponent />
    </div>
  );
}

export default App;
