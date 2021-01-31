/* eslint-disable no-mixed-operators */
import React from 'react';
import Player from '../Player';
import Opponent from '../Opponent';
import Scoreboard from '../Scoreboard';
import Loader from '../Loader';
import youWinImg from '../../helpers/images/youwin.jpg';
import youLoseImg from '../../helpers/images/youLose.jpg';
import tie from '../../helpers/images/tie.jpg';

class App extends React.Component {
  state = {
    yourScore: 0,
    computerScore: 0,
    yourChoice: '',
    computerChoice: '',
    loading: false,
    youWin: false,
    youLose: false,
    draw: false,
    choices: ['rock', 'paper', 'scissors'],
  };

  randomChoice = () => {
    const choice = this.state.choices[
      Math.floor(Math.random() * this.state.choices.length)
    ];
    this.setState({
      computerChoice: choice,
      loading: false,
    });
    return choice;
  };

  playAction = (userClick) => {
    this.setState({
      yourChoice: userClick,
      loading: true,
      computerChoice: '',
      youWin: false,
      youLose: false,
      draw: false,
    });
    this.randomChoice();
    setTimeout(() => {
      this.rockPaperScissorClick(userClick);
    }, 500);
  }

  rockPaperScissorClick = (userClick) => {
    const { computerChoice, yourChoice } = this.state;
    if (
      (yourChoice === 'rock' && computerChoice === 'scissors')
      || (yourChoice === 'scissors' && computerChoice === 'paper')
      || (yourChoice === 'paper' && computerChoice === 'rock')
    ) {
      this.setState((prevState) => ({
        yourScore: prevState.yourScore + 1,
      }));
      this.setState({ youWin: true });
    } else if (
      (yourChoice === 'paper' && computerChoice === 'scissors')
      || (yourChoice === 'rock' && computerChoice === 'paper')
      || (yourChoice === 'scissors' && computerChoice === 'rock')
    ) {
      this.setState((prevState) => ({
        computerScore: prevState.computerScore + 1,
        youLose: true,
      }));
    } else if (yourChoice === computerChoice) {
      this.setState({ draw: true });
    }
  };

  render() {
    const {
      yourScore,
      computerChoice,
      computerScore,
      yourChoice,
      loading,
      youWin,
      youLose,
      draw,
    } = this.state;

    const scores = {
      yourScore,
      computerScore,
    };

    return (
      <div className='App'>
        <Scoreboard scores={scores} />
        <div className='d-flex justify-content-center btnWrapper'>
          <button
            className='btn btn-success m-2'
            onClick={() => {
              this.playAction('rock');
            }}
          >
            Rock
          </button>
          <button
            className='btn btn-success m-2'
            onClick={() => {
              this.playAction('paper');
            }}
          >
            Paper
          </button>
          <button
            className='btn btn-success m-2'
            onClick={() => {
              this.playAction('scissors');
            }}
          >
            Scissors
          </button>
          <button
            className='btn btn-danger m-2'
            onClick={() => {
              this.setState({
                yourChoice: '',
                computerChoice: '',
                yourScore: 0,
                computerScore: 0,
              });
            }}
          >
            Reset
          </button>
        </div>
        <div className='d-flex justify-content-center'>
          <Player choice={yourChoice} />
          <Opponent choice={computerChoice} />
        </div>
        <div className='d-flex justify-content-center winLoseLoad'>
          {loading && <Loader />}
          {youWin && <img src={youWinImg} alt='winner winner' />}
          {youLose && <img src={youLoseImg} alt='big fat loser' />}
          {draw && <img src={tie} alt='tied game' />}
        </div>
      </div>
    );
  }
}

export default App;
