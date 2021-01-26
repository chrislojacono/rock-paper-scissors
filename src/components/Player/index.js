import React from 'react';
// import rock from '../../helpers/images/rock.png';
// import paper from '../../helpers/images/paper.png';
// import scissors from '../../helpers/images/scissors.png';

export default function Player({ choice }) {
  return (
      <div className='choiceWrapper m-4'>
        <h1>{choice}</h1>
      </div>
  );
}
