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
      <div className="col-12 col-lg desktop">
        <div className="desktop-container">
            <div>
                <div style={{"backgroundColor": "#ff605d"}}></div>
                <div style={{"backgroundColor": "#ffbe46"}}></div>
                <div style={{"backgroundColor": "#00c94d"}}></div>
            </div>
            <div></div>
            <div>
                <div>
                    <div>
                        <div onClick={() => {this.handleClick('clear')}} style={{"color": "white"}}>c</div>
                        <div onClick={() => {this.handleClick('7')}}>7</div>
                        <div onClick={() => {this.handleClick('4')}}>4</div>
                        <div onClick={() => {this.handleClick('1')}}>1</div>
                        <div onClick={() => {this.handleClick('0')}}>0</div>
                    </div>
                    <div>
                        <div onClick={() => {this.handleClick('+/1')}}>+/-</div>
                        <div onClick={() => {this.handleClick('8')}}>8</div>
                        <div onClick={() => {this.handleClick('5')}}>5</div>
                        <div onClick={() => {this.handleClick('2')}}>2</div>
                        <div onClick={() => {this.handleClick('.')}}>.</div>
                    </div>
                    <div>
                        <div onClick={() => {this.handleClick('%')}}>%</div>
                        <div onClick={() => {this.handleClick('9')}}>9</div>
                        <div onClick={() => {this.handleClick('6')}}>6</div>
                        <div onClick={() => {this.handleClick('3')}}>3</div>
                        <div onClick={() => {this.handleClick('&')}}>&</div>
                    </div>
                </div>
                <div style={{"color": "white"}}>
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