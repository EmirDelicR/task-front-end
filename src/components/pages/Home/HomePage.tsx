import React from 'react';

import Form from 'components/molecules/Form/Form';
import NavBar from 'components/molecules/NavBar/NavBar';

import './HomePage.scss';

function HomePage() {
  return (
    <div className="home-page">
      <NavBar />
      <h1>Welcome</h1>
      <h5>Please submit API key</h5>
      <Form />
    </div>
  );
}

export default HomePage;
