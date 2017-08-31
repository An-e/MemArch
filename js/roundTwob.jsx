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
    var select1 = document.querySelector('form');
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
      if ((this.state.imageClasses === 'imageToCheck backImg1') && (e.target.value === 'Leaning Tower of Pisa') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg2') && (e.target.value === 'Casa Mila') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg3') && (e.target.value === 'Sydney Opera House') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
          });
          select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg4') && (e.target.value === 'Colosseum') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg5') && (e.target.value === 'Fallingwater') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg6') && (e.target.value === 'Villa Savoye') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg7') && (e.target.value === 'Eiffel Tower') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg8') && (e.target.value === 'Notre Dame du Haut') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg9') && (e.target.value === 'Chrysler Building') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg10') && (e.target.value === 'Notre-Dame Cathedral') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg11') && (e.target.value === 'Parthenon') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg12') && (e.target.value === 'City of Arts and Sciences') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg13') && (e.target.value === 'Guggenheim Museum Bilbao') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg14') && (e.target.value === 'Palace of Culture and Science') ) {
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
           <form  >
              <input type='checkbox' value="Leaning Tower of Pisa" onChange={this.checkImg}>Leaning Tower of Pisa</input>
              <input type='checkbox' value="Casa Milà" onChange={this.checkImg}>Casa Milà</input>
              <input type='checkbox' value="Sydney Opera House" onChange={this.checkImg}>Sydney Opera House</input>
              <input type='checkbox' value="Colosseum" onChange={this.checkImg}>Colosseum</input>
              <input type='checkbox' value="Fallingwater">Fallingwater</input>
              <input type='checkbox' value="Villa Savoye" onChange={this.checkImg}>Villa Savoye</input>
              <input type='checkbox' value="Eiffel Tower" onChange={this.checkImg}>Eiffel Tower</input>
              <input type='checkbox' value="Notre Dame du Haut" onChange={this.checkImg}>Notre Dame du Haut</input>
              <input type='checkbox' value="Chrysler Building" onChange={this.checkImg}>Chrysler Building</input>
              <input type='checkbox' value="Notre-Dame Cathedral" onChange={this.checkImg}>Notre-Dame Cathedral</input>
              <input type='checkbox' value="Parthenon" onChange={this.checkImg}>Parthenon</input>
              <input type='checkbox' value="City of Arts and Sciences" onChange={this.checkImg}>City of Arts and Sciences</input>
              <input type='checkbox' value="Palace of Culture and Science" onChange={this.checkImg}>Palace of Culture and Science</input>
              <input type='checkbox' value="Sydney Opera House" onChange={this.checkImg}>Sydney Opera House</input>
          </form>
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
