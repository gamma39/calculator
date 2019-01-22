import React, { Component } from 'react';
import * as math from 'mathjs'
import './App.css';
import Buttons from './components/Buttons'
import Display from './components/Display';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentChar: '',
      display: '0',
      decimalFlag: false,
      operatorFlag: false,
    }
    this.handleClick = this.handleClick.bind(this)
    
  }
  handleClick(e){
    const {value} = e.target
    let display = this.state.display
    let operatorFlag = this.state.operatorFlag
    let decimalFlag = this.state.decimalFlag

    if(display.length === 16){
      if(value !== 'clear'){
        let tempDisplay = display
        this.setState({display: 'Too many digits'})
        setTimeout(() => {
          this.setState({display: tempDisplay})
      }, 500)
      }
      else{
        this.setState({
          display: '0',
          operatorFlag: false,
          decimalFlag: false
        })
      }
      
      
    }
    else{
    switch(true){
      case value === '0' ||
           value === '1' ||
           value === '2' ||
           value === '3' ||
           value === '4' ||
           value === '5' ||
           value === '6' ||
           value === '7' ||
           value === '8' ||
           value === '9':
        if(this.state.display === '0'){
          display = value
          operatorFlag = false
        }
        else{
          display += value
          operatorFlag = false
          
        }
        break
      case value === '+' ||
           value === '-' ||
           value === '*' ||
           value === "/":
        if(!this.state.operatorFlag){
          display += value
          operatorFlag = true
          decimalFlag = false
          
        }
        else{
          const newNumber = display.slice(0, display.length - 1)
          display = newNumber 
          display += value
          decimalFlag = false
        }
        
        break
      case value === 'clear':
        display = '0'
        operatorFlag = false
        decimalFlag = false
        break

      case value === "=":
        display = math.eval(display)
        display = math.format(display, {precision: 14})
        operatorFlag = false
        decimalFlag = false
        break

      case value === ".":
        if(!this.state.decimalFlag){
          if(this.state.operatorFlag){
            display = display + '0' + value
            decimalFlag = true
          }
          else{
            display += value
            decimalFlag = true
          }
          
          
        }
        break
      default:
        break
    }
    this.setState({decimalFlag})
    this.setState({operatorFlag})
    this.setState({display})
  } 
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.display}/>
        <Buttons onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
