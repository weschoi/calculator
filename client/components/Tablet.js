import React from 'react';

export default class Tablet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: '',
      recordArr: [],
      testRecord: '9+1-2*(4/2)',
      testRecordArr: ['9', '+', '1', '-', '2', '*', '(', '4', '/', '2', ')'],
      testResult: 8,
      result: '',
      backspaceMode: false,
      lastNumberisNumber: false
    }
  }

  handleClick(num) {

    var recordArr = this.state.recordArr;
    var recordArrLength = this.state.recordArr.length;

    var opArr = ['blank', '+', '-', '*', '/', '(', ')'];
    let numArr = ['blank', '1','2','3','4','5','6','7','8','9','0'];

    var lastItemIsOp = opArr.indexOf(recordArr[recordArrLength - 1]) > 0;
    var lastItemIsNum = numArr.indexOf(recordArr[recordArrLength - 1]) > 0;
    var currentNumisNum = numArr.indexOf(num) > 0;

    if (this.state.lastNumberisNumber && currentNumisNum) {
      this.state.recordArr[recordArrLength - 1] += num;
    } else {

      if (currentNumisNum) {
        this.state.lastNumberisNumber = true;
      } else {
        this.state.lastNumberisNumber = false;
      }

      this.state.recordArr.push(num)
    }

    this.setState({
      record: this.state.record += num
    })

  }

  handleBackspace() {
    var newRecord = this.state.record.slice(0, -1);
    var lengthOfRecordArr = this.state.recordArr.length;
    
    this.setState({
      record: newRecord
    })
    
    if (this.state.recordArr[lengthOfRecordArr - 1].length === 1) {
      this.state.recordArr.pop();
    } else {
      var newLastRecordArrItem = this.state.recordArr[lengthOfRecordArr - 1].slice(0, -1);
      this.state.recordArr[lengthOfRecordArr - 1] = newLastRecordArrItem;
    }
  
  }

  handleDot() {
    return (
        <div className="dot">
            <div></div>
        </div>
    )
  }

  handleEnter() {
    var result = eval(this.state.record).toString().slice(0, 10);

    this.setState({
      result: result
    })
  }
  
  render() {

    var opArr = ['blank', '+', '-', '*', '/', '(', ')'];

    return (
      <div className="tablet">

        <div className="tablet-container">

            { this.handleDot() }

            <div className="tablet-container-inner">
                <div className="results">
                  <div className="result">
                    <span>{this.state.result}</span>
                  </div>
                  <div className="record">

                      { 
                        this.state.recordArr.map((current, index) => {
                          if (opArr.indexOf(current) > 0) {
                            return <span id="op" key={index}>{`${current}`}</span>
                          } else {
                            return <span id="num" key={index}>{`${current}`}</span>
                          }
                        })
                      }

                  </div>
                </div>
                <div className="buttons-container">
                    <span>+/-</span>
                    <span onClick={() => {this.handleClick('(')}}>(</span>
                    <span onClick={() => {this.handleClick(')')}}>)</span>

                    <span className="delete" onClick={() => {this.handleBackspace()}}>
                      <svg width="49" height="26" viewBox="0 0 69 44">
                        <polygon points="50.4 15.5 27.2 15.5 18.6 22 24.9 28.5 50.4 28.5 " fill="#73E395"/>
                      </svg>
                    </span>

                    <span onClick={() => {this.handleClick('7')}}>7</span>
                    <span onClick={() => {this.handleClick('8')}}>8</span>
                    <span onClick={() => {this.handleClick('9')}}>9</span>
                    <span onClick={() => {this.handleClick('/')}} className="op">&#247;</span>

                    <span onClick={() => {this.handleClick('4')}}>4</span>
                    <span onClick={() => {this.handleClick('5')}}>5</span>
                    <span onClick={() => {this.handleClick('6')}}>6</span>
                    <span onClick={() => {this.handleClick('*')}} className="op">&#215;</span>

                    <span onClick={() => {this.handleClick('1')}}>1</span>
                    <span onClick={() => {this.handleClick('2')}}>2</span>
                    <span onClick={() => {this.handleClick('3')}}>3</span>
                    <span onClick={() => {this.handleClick('-')}} className="op">–</span>

                    <span onClick={() => {this.handleClick('0')}}>0</span>
                    <span onClick={() => {this.handleClick('.')}}>.</span>
                    <span onClick={() => {this.handleClick('%')}}>%</span>
                    <span onClick={() => {this.handleClick('+')}} className="op">+</span>

                    <span className="hexagon">
                      <svg width="49" height="28" viewBox="0 0 69 44">
                        <path d="M47.3 27.4c0 1.1-0.8 2.5-1.7 3l-9.3 5.4c-1 0.6-2.5 0.6-3.5 0l-9.3-5.4c-1-0.5-1.7-1.9-1.7-3V16.6c0-1.1 0.8-2.4 1.7-3l9.3-5.4c1-0.5 2.5-0.5 3.5 0l9.3 5.4c1 0.6 1.7 1.9 1.7 3V27.4z" />
                        <circle cx="34.5" cy="22" r="2" />
                      </svg>
                    </span>

                    <span className="hexagon">
                      <svg width="49" height="28" viewBox="0 0 69 44">
                        <path d="M47.3 27.4c0 1.1-0.8 2.5-1.7 3l-9.3 5.4c-1 0.6-2.5 0.6-3.5 0l-9.3-5.4c-1-0.5-1.7-1.9-1.7-3V16.6c0-1.1 0.8-2.4 1.7-3l9.3-5.4c1-0.5 2.5-0.5 3.5 0l9.3 5.4c1 0.6 1.7 1.9 1.7 3V27.4z" />
                        <circle cx="37.5" cy="22" r="2" />
                        <circle cx="31.5" cy="22" r="2" />
                      </svg>
                    </span>

                    <span className="hexagon">
                      <svg width="49" height="28" viewBox="0 0 69 44">
                          <path d="M47.3 27.4c0 1.1-0.8 2.5-1.7 3l-9.3 5.4c-1 0.6-2.5 0.6-3.5 0l-9.3-5.4c-1-0.5-1.7-1.9-1.7-3V16.6c0-1.1 0.8-2.4 1.7-3l9.3-5.4c1-0.5 2.5-0.5 3.5 0l9.3 5.4c1 0.6 1.7 1.9 1.7 3V27.4z" />
                          <circle cx="34.5" cy="22" r="2" />
                          <circle cx="40.5" cy="22" r="2" />
                          <circle cx="28.5" cy="22" r="2" />
                        </svg>
                    </span>

                    <span className="hexagon equal" onClick={() => {this.handleEnter()}}>
                      <svg width="49" height="28" viewBox="0 0 69 44">
                        <path d="M47.3 27.4c0 1.1-0.8 2.4-1.7 3l-9.3 5.4c-1 0.6-2.5 0.6-3.5 0l-9.3-5.4c-1-0.6-1.7-1.9-1.7-3V16.6c0-1.1 0.8-2.4 1.7-3l9.3-5.4c1-0.5 2.5-0.5 3.5 0l9.3 5.4c1 0.6 1.7 1.9 1.7 3V27.4z" />
                        <rect x="29.3" y="23" width="10.4" height="1.5" />
                        <rect x="29.3" y="19.5" width="10.4" height="1.5" />
                      </svg>
                    </span>

                </div>
            </div>

          <div className="home">
            <svg height="22" width="22">
              <circle cx="11" cy="11" r="9" />
            </svg>
          </div>

        </div>

        <div className="stylus"></div>

      </div>
    )
  }
}