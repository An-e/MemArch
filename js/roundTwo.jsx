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
      if ((this.state.imageClasses === 'imageToCheck backImg1') && (this.state.title === 'Image 01') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg2') && (this.state.title === 'Image 02') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg3') && (this.state.title === 'Image 03') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
          });
          select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg4') && (this.state.title === 'Image 04') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg5') && (this.state.title === 'Image 05') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg6') && (this.state.title === 'Image 06') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg7') && (this.state.title === 'Image 07') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg8') && (this.state.title === 'Image 08') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg9') && (this.state.title === 'Image 09') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg10') && (this.state.title === 'Image 10') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg11') && (this.state.title === 'Image 11') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg12') && (this.state.title === 'Image 12') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg13') && (this.state.title === 'Image 13') ) {
        this.setState({
          changeImg: this.state.changeImg + 1,
          imageClasses: 'imageToCheck backImg' + this.state.arr1[this.state.changeImg],
          info: false
        });
        select1.value = '';
      }
      else if ((this.state.imageClasses === 'imageToCheck backImg14') && (this.state.title === 'Image 14') ) {
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
              <option value=" "></option>
              <option value="Image 01">Image 01</option>
              <option value="Image 02">Image 02</option>
              <option value="Image 03">Image 03</option>
              <option value="Image 04">Image 04</option>
              <option value="Image 05">Image 05</option>
              <option value="Image 06">Image 06</option>
              <option value="Image 07">Image 07</option>
              <option value="Image 08">Image 08</option>
              <option value="Image 09">Image 09</option>
              <option value="Image 10">Image 10</option>
              <option value="Image 11">Image 11</option>
              <option value="Image 12">Image 12</option>
              <option value="Image 13">Image 13</option>
              <option value="Image 14">Image 14</option>
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
