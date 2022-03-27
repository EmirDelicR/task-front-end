import React, { Children, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PageRoutes } from 'constants/constants';

import Loader from 'components/atoms/Loader/Loader';

const HomePage = lazy(() => import('components/pages/Home/HomePage'));
const EncodingPage = lazy(() => import('components/pages/Encoding/EncodingPage'));

function RouterComponent() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={PageRoutes.HOME_PAGE} element={<HomePage />} />
          <Route path={PageRoutes.ENCODING_PAGE} element={<EncodingPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RouterComponent;
