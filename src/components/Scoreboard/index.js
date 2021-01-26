import React from 'react';

export default function Scoreboard({ scores }) {
  return (
    <div className='scoreboardWrapper d-flex justify-content-center'>
      <div className='m-3'>
        <h2>Your Score</h2>
        <h3>{scores.userScore}</h3>
      </div>
      <div className='m-3'>
        <h2>Computer Score</h2>
        <h3>{scores.computerScore}</h3>
      </div>
    </div>
  );
}
