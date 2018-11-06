import React from 'react';
import { runInThisContext } from 'vm';

export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '',
      day: '',
      record: '',
      recordArr: [],
      clearEvents: 0,
      equalMode: false,
      decimalMode: false,
      // result: ''
    }
  }

  componentWillMount() {
    this.setTime();
  }

  setTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let morningOrNight = 'AM';
    let day = date.getDay();

    let week = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    if (hour > 11) morningOrNight = 'PM';
    if (hour === 0) hour = 12;
    if (hour > 12) hour -= 12;
    if (minute < 10 && minute > 0) minute = '0' + minute;

    this.setState({
      time: `${hour}:${minute} ${morningOrNight}`,
      day: week[day]
    });
  }

  componentDidMount() {
    window.setInterval(function() {
      this.setTime();
    }.bind(this), 1000);
  }

  handleClick(num) {

    var lengthArr = this.state.recordArr.length;
    var lengthStr = this.state.record.length;
    var equalMode = this.state.equalMode;

    let numArr = ['blank', '1','2','3','4','5','6','7','8','9','0','.'];
    let opArr = ['blank', '+', '-', '*', '/'];

    if (equalMode) {

      if (opArr.indexOf(num) > 0) {

        this.setState({
          record: this.state.record += num,
          clearEvents: 0,
          equalMode: false
        });

      } else {

        if (num === '.') {

          this.setState({
            record: this.state.record + '.',
            clearEvents: 0,
            equalMode: false
          })
          
        } else {

          this.setState({
            record: num,
            clearEvents: 0,
            equalMode: false
          })
          
        }
      }

    } else {

      this.setState({
        record: this.state.record += num,
        clearEvents: 0,
        equalMode: false
      });

    }


    var previousButtonWasNumber = numArr.indexOf(this.state.record[lengthStr-1]) > 0;
    var currentButtonIsNumber = numArr.indexOf(num) > 0;

    if (previousButtonWasNumber && currentButtonIsNumber) {
      this.state.recordArr[lengthArr - 1] += num;
    } else {
      this.state.recordArr.push(num);
    }
  }


  handleClear() {

    let numArr = ['blank', '1','2','3','4','5','6','7','8','9','0'];

    let recordArrLength = this.state.recordArr.length;

    let recordArr = this.state.recordArr;
    let clearEvents = this.state.clearEvents;
    let lastArrayItem = recordArr[recordArr.length - 1];
    let lastArrayItemIsNumber = numArr.indexOf(lastArrayItem) > 0;

    if (clearEvents) {
      this.setState({
        record: '',
        recordArr: [],
        clearEvents: 0,
        equalMode: false
      })
    } else {
      this.state.clearEvents++;

      if (this.state.recordArr[recordArrLength - 2] === '=') {
        var newRecordArr = this.state.recordArr.slice(0, recordArrLength - 2);
        newRecordArr.push('');

        this.setState({
          record: ''
        });

      } else {
        var newRecordArr = this.state.recordArr.slice(0, recordArrLength - 1);
      }

      this.setState({
        recordArr: newRecordArr
      })

      // this.state.recordArr.splice(recordArrLength -1, 1);
      // console.log('recordArr: ', this.state.recordArr);
      // if (lastArrayItemIsNumber)

    }
  }

  handleEnter() {
    let result = eval(this.state.record).toString().slice(0, 12);

    this.setState({
      record: result, 
      clearEvents: 0,
      equalMode: true
    });

    this.state.recordArr.push('=', result);
  }
  
  render() {
    return (
      <div className="desktop">

        <div className="nav">
          <div className="left">
            <div></div>
            <span>Calculator</span>
            <span>File</span>
            <span>Edit</span>
            <span>Help</span>
          </div>
          <div className="right">
            <div></div>
            <div></div>
            <span>{`${this.state.day} ${this.state.time}`}</span>
            <div></div>
            <div></div>
            <div>
              <div>
                <div></div>
                <div></div>
              </div>

              <div>
                <div></div>
                <div className="short"></div>
              </div>

              <div>
                <div></div>
                <div></div>
              </div>

            </div>
          </div>
        </div>

        <div className="desktop-container">

          <div className="dots-container">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <rect x="5.1" y="1.1" transform="matrix(-0.7074 -0.7068 0.7068 -0.7074 5.5031 13.2782)" width="0.9" height="8.9"/>
                <rect x="5.1" y="1.1" transform="matrix(-0.7068 0.7074 -0.7074 -0.7068 13.2789 5.4986)" width="0.9" height="8.9"/>
              </svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <rect x="1.1" y="5.1" width="8.9" height="0.9" /></svg>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
                <polygon points="9.1 1.9 2.6 1.9 9.1 8.4 "/><polygon points="1.9 9.1 8.4 9.1 1.9 2.6 "/>
              </svg>
            </div>
          </div>

          <div className="results">

            {
              this.state.recordArr.map((current, index) => {
                if (index === this.state.recordArr.length - 1) {
                  return <span className="activeButton" key={index}>{`${current}`}</span>
                } else if (current === '=') {
                  return <span className="equal" key={index}>{`${current}`}</span>
                }
                return <span key={index}>{`${current}`}</span>
              })
            }

          </div>

          <div className="buttons-container">

            <div className="number-container">

              <div><div onClick={() => {this.handleClear()}}>c</div></div>
              <div><div onClick={() => {this.handleClick('+/1')}}>+/-</div></div>
              <div><div onClick={() => {this.handleClick('%')}}>%</div></div>

              <div><div onClick={() => {this.handleClick('7')}}>7</div></div>
              <div><div onClick={() => {this.handleClick('8')}}>8</div></div>
              <div><div onClick={() => {this.handleClick('9')}}>9</div></div>

              <div><div onClick={() => {this.handleClick('4')}}>4</div></div>
              <div><div onClick={() => {this.handleClick('5')}}>5</div></div>
              <div><div onClick={() => {this.handleClick('6')}}>6</div></div>

              <div><div onClick={() => {this.handleClick('1')}}>1</div></div>
              <div><div onClick={() => {this.handleClick('2')}}>2</div></div>
              <div><div onClick={() => {this.handleClick('3')}}>3</div></div>

              <div><div onClick={() => {this.handleClick('0')}}>0</div></div>
              <div><div onClick={() => {this.handleClick('.')}}>.</div></div>
              <div><div onClick={() => {this.handleClick('&')}}><pre style={{'margin': '0px'}}>&gt;</pre></div></div>

            </div>




            <div className="operator-container">
              <div onClick={() => {this.handleClick('/')}}>&#247;</div>
              <div onClick={() => {this.handleClick('*')}}>&#215;</div>
              <div onClick={() => {this.handleClick('-')}}>–</div>
              <div onClick={() => {this.handleClick('+')}}>+</div>
              <div onClick={() => {this.handleEnter()}}>=</div>
            </div>
            
          </div>
        </div>

        <div className="dock">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}