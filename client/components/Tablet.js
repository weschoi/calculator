import React from 'react';

export default class Tablet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleClick(num) {
    console.log(num);
  }

  handleDot() {
    return (
        <div className="dot">
            <div></div>
        </div>
    )
  }

  handleHome() {
      return (
        <div className="home">
            <svg height="22" width="22">
                <circle cx="11" cy="11" r="9" stroke="rgb(161, 165, 179)" strokeWidth="3" fill="white" />
            </svg>
        </div>
      )
  }
  
  render() {
    return (
      <div className="tablet">

        <div className="tablet-container">

            { this.handleDot() }

            <div className="tablet-container-inner">
                <div className="results"></div>
                <div className="buttons-container">
                    <span>+/-</span>
                    <span>(</span>
                    <span>)</span>
                    <span>&#247;</span>

                    <span>7</span>
                    <span>8</span>
                    <span>9</span>
                    <span className="op">&#247;</span>

                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span className="op">&#215;</span>

                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span className="op">–</span>

                    <span>0</span>
                    <span>.</span>
                    <span>%</span>
                    <span className="op">+</span>

                    <span>ss</span>
                    <span>ss</span>
                    <span>ss</span>
                    <span>=</span>
                </div>
            </div>

            { this.handleHome() }

        </div>

        <div className="stylus"></div>

      </div>
    )
  }
}