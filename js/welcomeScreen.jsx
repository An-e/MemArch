import React from 'react';
import ReactDOM from 'react-dom';

class WelcomeScreen extends React.Component {

  state = {
    btnClicked: false
  }


  render() {
    return (
      <div className='container0 color2b'>
        <div className='row row1'>
          <div className='col-3'>
            <div className='card1 card01'>
              <div className='front front01'></div>
               <div className='back back01'></div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card1 card02'>
              <div className='front front02'></div>
              <div className='back back02'></div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card1 card03'>
              <div className='front front03'></div>
              <div className='back back03'></div>
            </div>
          </div>

          <div className='col-3'>
            <div className='card1 card04'>
              <div className='front front04'></div>
              <div className='back back04'></div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card1 card05'>
              <div className='front front05'></div>
              <div className='back back05'></div>
            </div>
          </div>
          <div className='col-3'>
            <div className='card1 card06'>
              <div className='front front06'></div>
              <div className='back back06'></div>
            </div>
          </div>
        </div>
        <div className='row row2'>
        </div>
        <div className='row'>
        </div>
        <div className='row'>
        </div>
        <div className='row'>
          <div className='col-1'></div>
          <div className='col-1'></div>
          <div className='col-2'>
            <button className='playBtn' onClick={this.props.action01}>Play it now!</button>
          </div>
          <div className='col-1'></div>
          <button className='skipIntro' onClick={this.props.action01}>Skip intro</button>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
// wiecej komponentow w nawiasach po przecinku
