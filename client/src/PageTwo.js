import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h1>Welcome to Page Two!</h1>
      <Link to="/">Return to Fibonacci Calculator</Link>
    </div>
  );
};
