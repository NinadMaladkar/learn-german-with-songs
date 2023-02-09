import React, { useEffect } from 'react';
import { fetchServerRequest } from '../api';

const Home = () => {
  useEffect(() => {
    fetchServerRequest();
  }, []);
  return <div>Home</div>;
};

export default Home;
