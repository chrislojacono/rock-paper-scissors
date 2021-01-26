import React from 'react';
import Player from '../Player';
import Opponent from '../Opponent';
import Scoreboard from '../Scoreboard';
import Loader from '../Loader';

class App extends React.Component {
  state = {
    userScore: 0,
    computerScore: 0,
    yourChoice: '',
    computerChoice: '',
    loading: false,
    youWin: false,
    youLose: false,
    choices: ['rock', 'paper', 'scissors'],
  }

  randomChoice = () => {
    const choice = this.state.choices[Math.floor(Math.random() * this.state.choices.length)];
    return choice;
  }

  rockPaperScissorClick = (userClick) => {
    this.setState({
      yourChoice: userClick,
      loading: true,
    });
    const compChoice = this.randomChoice();
    setTimeout(() => {
      this.setState({
        computerChoice: compChoice,
        loading: false,
      });
    }, 2000);
  }

  render() {
    const {
      userScore,
      computerChoice,
      computerScore,
      yourChoice,
      loading,
    } = this.state;

    const scores = {
      userScore,
      computerScore,
    };

    return (
      <div className="App">
        <Scoreboard scores={scores}/>
        <div className='d-flex justify-content-center btnWrapper'>
          <button className='btn btn-outline-success m-2' onClick={() => {
            this.rockPaperScissorClick('rock');
          }}>Rock</button>
          <button className='btn btn-outline-success m-2'onClick={() => {
            this.rockPaperScissorClick('paper');
          }}>Paper</button>
          <button className='btn btn-outline-success m-2'onClick={() => {
            this.rockPaperScissorClick('scissors');
          }}>Scissors</button>
          <button className='btn btn-outline-danger m-2'onClick={() => {
            this.setState({
              yourChoice: '',
              computerChoice: '',
            });
          }}>Reset</button>
        </div>
        <div className='d-flex justify-content-center'>
          <Player choice={yourChoice}/>
          <Opponent choice={computerChoice}/>
        </div>
        <div className='d-flex justify-content-center winLoseLoad'>
          {loading && <Loader/>}
        </div>
      </div>
    );
  }
}

export default App;
