import React from 'react';
import { RingSpinner } from 'react-spinners-kit';

export default function Loader() {
  return (
  <div className="d-flex justify-content-center align-items-center mt-5">
    <h2>Computer is calculating it's move...</h2>
    <RingSpinner size={300} color="#1FA5A3"/>
  </div>
  );
}
