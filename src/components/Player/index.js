import React from 'react';
import rock from '../../helpers/images/rock.png';
import paper from '../../helpers/images/paper.png';
import scissors from '../../helpers/images/scissors.png';

export default function Player({ choice }) {
  return (
    <div className='choiceWrapper m-4 rpsImgWrapper'>
      {choice === 'rock' && <img className="rpsImg"src={rock} alt='a rock' />}
      {choice === 'scissors' && <img className="rpsImg" src={scissors} alt='a scissors' />}
      {choice === 'paper' && <img className="rpsImg" src={paper} alt='a paper' />}
    </div>
  );
}
