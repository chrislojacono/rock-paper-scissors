/* eslint-disable no-mixed-operators */
import React from 'react';
import Player from '../Player';
import Opponent from '../Opponent';
import Scoreboard from '../Scoreboard';
import Loader from '../Loader';
import youWinImg from '../../helpers/images/youwin.jpg';
import youLoseImg from '../../helpers/images/youLose.jpg';

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
    this.rockPaperScissorClick(userClick);
    setTimeout(() => {
      this.randomChoice();
    }, 2000);
  }

  rockPaperScissorClick = (userClick) => {
    const { computerChoice, yourChoice } = this.state;
    this.setState({
      yourChoice: userClick,
      loading: true,
      computerChoice: '',
    });
    if (
      (yourChoice === 'rock' && computerChoice === 'scissors')
      || (yourChoice === 'scissors' && computerChoice === 'paper')
      || (yourChoice === 'paper' && computerChoice === 'rock')
    ) {
      this.setState((prevState) => ({
        yourScore: prevState.yourScore + 1,
      }));
      this.setState({ youWin: true });
      setTimeout(() => {
        this.setState({
          youWin: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 5000);
    } else if (
      (yourChoice === 'paper' && computerChoice === 'scissors')
      || (yourChoice === 'rock' && computerChoice === 'paper')
      || (yourChoice === 'scissors' && computerChoice === 'rock')
    ) {
      this.setState((prevState) => ({
        computerScore: prevState.computerScore + 1,
        youLose: true,
      }));
      setTimeout(() => {
        this.setState({
          youLose: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 5000);
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
            className='btn btn-outline-success m-2'
            onClick={() => {
              this.playAction('rock');
            }}
          >
            Rock
          </button>
          <button
            className='btn btn-outline-success m-2'
            onClick={() => {
              this.playAction('paper');
            }}
          >
            Paper
          </button>
          <button
            className='btn btn-outline-success m-2'
            onClick={() => {
              this.playAction('scissors');
            }}
          >
            Scissors
          </button>
          <button
            className='btn btn-outline-danger m-2'
            onClick={() => {
              this.setState({
                yourChoice: '',
                computerChoice: '',
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
        </div>
      </div>
    );
  }
}

export default App;
