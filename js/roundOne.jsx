
import React from 'react';
import ReactDOM from 'react-dom';



class Game01 extends React.Component {
  state = {
    clicks: 0,
    previousClicked: '',
    previousClickedFront: '',
    previousClickedBack: '',
    info: 'info',
    backClasses: '',
    building: 'Budynek',
    nrOfPairs: 0,
    introClasses: 'instruction instruction2 instruction3',
    click: 0,
    buildings: ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5', 'Image 6', 'Image 7','Image 8', 'Image 9', 'Image 10', 'Image 11', 'Image 12', 'Image 13', 'Image 14']
  }

  getRandom() {
    const backs = document.querySelectorAll('.back');
    const arr = [];
    for (var i = 0; i < 28; i++) {

    let rand;
    let count = 3;
    while (count > 1) {
      rand = Math.floor( Math.random() * ( 14 - 1 + 1 ) + 1 );
      count = arr.reduce(function(n, val) {
        return n + (val === rand);
      }, 0);
    }
      arr.push(rand);
      backs[i].dataset.img = rand;
    }
  }

  game01 = (e) => {
      e.preventDefault();
      this.setState({
        click: this.state.click + 1,
        introClasses: 'instruction instruction2 instruction3 instruction4'
      });
      if (this.state.click === 1) {
        this.timeout5 = setTimeout(() => {
            this.getRandom();
        }, 100)
      }
      console.log(this.state.click);
  }



  handleClick = (e) => {
    if (this.state.clicks < 2) {
      e.preventDefault();
      this.setState({
        clicks: this.state.clicks + 1
      });
      console.log(this.state.clicks);
      console.log(e.currentTarget, 'raz');
      const divs = e.currentTarget.querySelectorAll('div');
      if (divs[0].className === 'front') {
         divs[0].className = 'frontInversed';
         divs[1].className = 'backInversed backImg' +  divs[1].dataset.img;
         this.setState({
           backClasses: divs[1].className
         });
      }


      for (var i = 0; i < this.state.buildings.length; i++) {
        if (this.state.backClasses === 'backInversed backImg' + (i + 1)) {
          this.setState({
            building: this.state.buildings[i]
          });
        }
      }



      if (this.state.clicks === 0) {
        this.setState({
          previousClickedFront: divs[0],

          previousClickedBack: divs[1]
        });
      }
      console.log(this.state.clicks, 'klik');
      console.log(this.state.previousClickedBack, 'pp');

      if (this.state.clicks === 1) {

        console.log(divs[1].dataset.img, 'dd');
        console.log(this.state.previousClickedBack.dataset.img, 'dd');

        if (divs[1].dataset.img != this.state.previousClickedBack.dataset.img) {

          this.timeout1 = setTimeout(() => {
            divs[0].className = 'front';
            divs[1].className = 'back';
            this.state.previousClickedFront.className = 'front';
            this.state.previousClickedBack.className = 'back';
            this.setState({
              clicks: 0
            });
          }, 1000)

        } else {
          this.setState({
            clicks: 0,
          });
          this.timeout2 = setTimeout(() => {
            this.setState({
              info: 'info showInfo'
            });
          }, 1200)
        }
      }
    }

    }

    hideInfo = (e) => {
      e.preventDefault();
      this.setState({
        info: 'info',
      });
      this.timeout3 = setTimeout(() => {
        this.setState({
          nrOfPairs: this.state.nrOfPairs + 1
        });
      }, 1000)
    }

  render() {
    if (this.state.click < 2) {
     return (
       <div className='container0 color3' onClick={e => this.game01(e)}>
         <div className='instruction instruction2'>
           Round 1
         </div>
         <div className={this.state.introClasses}>
           Match images
         </div>
       </div>
     );
   }
    else if (this.state.nrOfPairs === 14) {
      return(
        <div className='container color3' onClick={this.props.action02}>
          <div className='instruction instruction2'>
            Round 1
          </div>
          <div className={this.state.introClasses}>
            done!
          </div>
        </div>
      );
    } else {
      return (
        <div className='container color2b'>
            <div className='row'>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
              <div className='col-1'>
                <div className='card1' onClick={e => this.handleClick(e)}>
                  <div className='front'></div>
                  <div className='back'></div>
                </div>
              </div>
            </div>
          <div className={this.state.info} onClick={e => this.hideInfo(e)}>
            <div className='card7'>
              <div className={this.state.backClasses}>
              </div>
              <div className='description'>
                <div className='buildingDescription'>{this.state.building}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Game01;
