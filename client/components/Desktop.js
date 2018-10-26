import React from 'react';

export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick(num) {
    console.log(num);
  }
  

  render() {
    return (
      <div className="desktop">
        <div className="desktop-container">

          <div className="dots-container">
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="results"></div>

          <div className="buttons-container">

            <div className="number-container">
              <div onClick={() => {this.handleClick('clear')}}>c</div>
              <div onClick={() => {this.handleClick('+/1')}}>+/-</div>
              <div onClick={() => {this.handleClick('%')}}>%</div>

              <div onClick={() => {this.handleClick('7')}}>7</div>
              <div onClick={() => {this.handleClick('8')}}>8</div>
              <div onClick={() => {this.handleClick('9')}}>9</div>

              <div onClick={() => {this.handleClick('4')}}>4</div>
              <div onClick={() => {this.handleClick('5')}}>5</div>
              <div onClick={() => {this.handleClick('6')}}>6</div>

              <div onClick={() => {this.handleClick('1')}}>1</div>
              <div onClick={() => {this.handleClick('2')}}>2</div>
              <div onClick={() => {this.handleClick('3')}}>3</div>

              <div onClick={() => {this.handleClick('1')}}>0</div>
              <div onClick={() => {this.handleClick('.')}}>.</div>
              <div onClick={() => {this.handleClick('&')}}><pre>&gt;</pre></div>
            </div>

            <div className="operator-container">
              <div onClick={() => {this.handleClick('/')}}>/</div>
              <div onClick={() => {this.handleClick('x')}}>x</div>
              <div onClick={() => {this.handleClick('-')}}>-</div>
              <div onClick={() => {this.handleClick('+')}}>+</div>
              <div onClick={() => {this.handleClick('=')}}>=</div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}