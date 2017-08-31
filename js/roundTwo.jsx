import React from 'react';
import ReactDOM from 'react-dom';

class Game02 extends React.Component {

  state = {
    introClasses: 'instruction instruction2 instruction3',
    click: 0,
    arr1: [],
    changeImg: 1,
    imageClasses: 'imageToCheck',
    title: '',
    info: false
   }

   gen14Numbers(){
     var arr = [];
     var rand;
     while (arr.length < 14) {
       rand = Math.floor( Math.random() * ( 14 - 1 + 1 ) + 1 );
       if (arr.indexOf(rand) == -1) {
         arr.push(rand);
       }
     }
     console.log(arr.length);
     return arr;
   }

  componentDidMount(){
    var select1 = document.querySelector('select');
    select1 = this.state.title;
    var arr = this.gen14Numbers();
        this.setState({
          arr1: arr,
          imageClasses: 'imageToCheck backImg' + arr[0]
        });
        console.log(arr);
  }

  game02 = (e) => {
      e.preventDefault();
      this.setState({
        click: this.state.click + 1,
        introClasses: 'instruction instruction2 instruction3 instruction4'
      });
  }

  handleTitleChange = (e) => {
      e.preventDefault();
      this.setState({
        title: e.target.value
      });
      console.log(e.target.value);
  }

  backToGame = (e) => {
      e.preventDefault();
      this.setState({
        info: false
      });
      console.log(this.state.info);
  }

  checkImg = (e) => {
      e.preventDefault();
      var select1 = document.querySelector('select');
      console.log(select1.value, 'raz');
      if ((this.state.imageClasses === 'imageToCheck backImg1') && (this.state.title === 'Leaning Tower of Pisa') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg2') && (this.state.title === 'Casa Mila') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg3') && (this.state.title === 'Sydney Opera House') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
          });
          select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg4') && (this.state.title === 'Colosseum') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg5') && (this.state.title === 'Fallingwater') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg6') && (this.state.title === 'Villa Savoye') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg7') && (this.state.title === 'Eiffel Tower') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg8') && (this.state.title === 'Notre Dame du Haut') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg9') && (this.state.title === 'Chrysler Building') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg10') && (this.state.title === 'Notre-Dame Cathedral') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg11') && (this.state.title === 'Parthenon') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg12') && (this.state.title === 'City of Arts and Sciences') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg13') && (this.state.title === 'Guggenheim Museum Bilbao') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg14') && (this.state.title === 'Palace of Culture and Science') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      } else {
        this.setState({
          info: true
        });
      }
      console.log(this.state.info);
  }


  render() {
      if (this.state.click < 2) {
       return (
         <div className='container0 color3' onClick={e => this.game02(e)}>
           <div className='instruction instruction2'>
             Round 2
           </div>
           <div className={this.state.introClasses}>
             Do you know what it is?
           </div>
         </div>
       );
     }
     if (this.state.info === true) {
      return (
       <div className='container0 color3' onClick={e => this.backToGame(e)}>
         <div className='instruction instruction2'>Wrong answer
         </div>
         <div className='instruction instruction2 instruction3 instruction4'>Try again!
         </div>
       </div>
      );
    }
     if (this.state.changeImg === 15) {
      return (
        <div className='container0 color3' onClick={e => this.game02(e)}>
          <div className='instruction instruction2'>
            Congratulations!
          </div>
          <div className='instruction instruction5'>
            You did great!
          </div>
          <div className='instruction instruction2 instruction6'>
            Excellent score!
          </div>
        </div>
        );
      } else {
        return (
          <div className='container0 color2b' >
           <div className={this.state.imageClasses}>
           </div>
           <select className='checkInput' value={this.state.title} onChange={this.handleTitleChange}>
              <option value="Leaning Tower of Pisa"></option>
              <option value="Leaning Tower of Pisa">Leaning Tower of Pisa</option>
              <option value="Casa Milà">Casa Milà</option>
              <option value="Sydney Opera House">Sydney Opera House</option>
              <option value="Colosseum">Colosseum</option>
              <option value="Fallingwater">Fallingwater</option>
              <option value="Villa Savoye">Villa Savoye</option>
              <option value="Eiffel Tower">Eiffel Tower</option>
              <option value="Notre Dame du Haut">Notre Dame du Haut</option>
              <option value="Chrysler Building">Chrysler Building</option>
              <option value="Notre-Dame Cathedral">Notre-Dame Cathedral</option>
              <option value="Parthenon">Parthenon</option>
              <option value="City of Arts and Sciences">City of Arts and Sciences</option>
              <option value="Palace of Culture and Science">Palace of Culture and Science</option>
              <option value="Sydney Opera House">Sydney Opera House</option>
          </select>
           <button className='checkBtn' onClick={e => this.checkImg(e)}>
             Check it!
           </button>
         </div>
        );
      }
    }
  }


export default Game02;
// wiecej komponentow w nawiasach po przecinku
