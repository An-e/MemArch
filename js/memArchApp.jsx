import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from './welcomeScreen.jsx';
import Game01 from './roundOne.jsx';
import Game02 from './roundTwo.jsx';


class App extends React.Component {
  state = {
    btnClicked: false,
    game01Done: false
  }

  startGame01 = (e) => {
    e.preventDefault();
    this.setState({
      btnClicked: true
    });
  }

  startGame02 = (e) => {
    e.preventDefault();
    this.setState({
      game01Done: true
    });
  }


    render() {
      if (this.state.btnClicked === false) {
        return (
          <WelcomeScreen action01={this.startGame01}/>
        );
      }
      else if (this.state.game01Done === true) {
        return (
          <Game02/>
        );
      } else {
        return (
          <Game01 action02={this.startGame02}/>
        );
      }
    }
  }


document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render(
      <App />,
      document.getElementById('app')
  );
});
