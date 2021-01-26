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
  }

  randomChoice = () => {
    const choice = this.state.choices[Math.floor(Math.random() * this.state.choices.length)];
    return choice;
  }

  rockPaperScissorClick = (userClick) => {
    const { computerChoice, yourChoice } = this.state;
    this.setState({
      yourChoice: userClick,
      loading: true,
      computerChoice: '',
    });
    const compChoice = this.randomChoice();
    setTimeout(() => {
      this.setState({
        computerChoice: compChoice,
        loading: false,
      });
    }, 1500);
    if (yourChoice === 'rock' && computerChoice === 'scissors') {
      this.setState((prevState) => ({
        yourScore: prevState.yourScore + 1,
        youWin: true,
      }));
      setTimeout(() => {
        this.setState({
          youWin: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 3500);
    } else if (yourChoice === 'paper' && computerChoice === 'scissors') {
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
      }, 3500);
    } else if (yourChoice === 'scissors' && computerChoice === 'paper') {
      this.setState((prevState) => ({
        userScore: prevState.userScore + 1,
        youWin: true,
      }));
      setTimeout(() => {
        this.setState({
          youWin: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 3500);
    } else if (yourChoice === 'rock' && computerChoice === 'paper') {
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
      }, 3500);
    } else if (yourChoice === 'paper' && computerChoice === 'rock') {
      this.setState((prevState) => ({
        userScore: prevState.userScore + 1,
        youWin: true,
      }));
      setTimeout(() => {
        this.setState({
          youWin: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 3500);
    } else if (yourChoice === 'scissors' && computerChoice === 'rock') {
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
      }, 3500);
    } else if (yourChoice === computerChoice) {
      this.setState({
        draw: true,
      });
      setTimeout(() => {
        this.setState({
          draw: false,
          yourChoice: '',
          computerChoice: '',
        });
      }, 3500);
    }
  }

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
          {youWin && <img src={youWinImg} alt='winner winner'/>}
          {youLose && <img src={youLoseImg} alt='big fat loser'/>}
        </div>
      </div>
    );
  }
}

export default App;
