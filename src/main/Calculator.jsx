/* eslint-disable no-undef */
import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  opeartion: null,
  values: [0,0],
  current: 0
}

let digits = 0;


export default class Calculator extends Component {

    state = {...initialState }
  
    constructor(props) {
      super(props)
      this.clearMemory = this.clearMemory.bind(this)
      this.setOperation = this.setOperation.bind(this)
      this.addDigit = this.addDigit.bind(this)
    }

    countDigits(number) {
      
    }

    clearMemory() {
      this.setState({ ...initialState })
      digits = 0;
    }

    setOperation(operation) {
      if(this.state.current === 0) {
        this.setState({operation, current:1, clearDisplay: true})
      } else {
        const finish = operation === '=' 
        const currentOperation = this.state.operation

        const values = [...this.state.values]

        switch(currentOperation) {
          case 'x':
            values[0] = values[0] * values[1]
          break;

          case '÷':
            if(values[1] !== 0) {
              values[0] = values[0] / values[1]

              var sp = (values[0] + '').split('.');
              if (sp[1] !== undefined) {
                var flag = sp[1].length;
              }
              
              if(flag >= 10) {
                values[0] = values[0].toFixed(4) + "..."
              }
        
            } else {
              values[0] = "Math Error"
            }
          break;

          case '+':
            values[0] = values[0] + values[1]

            var sp2 = (values[0] + '').split('.');
              if (sp2[1] !== undefined) {
                var flag2 = sp2[1].length;
              }
              
              if(flag2 >= 4) {
                values[0] = values[0].toFixed(4)
              }
          break;

          case '-':
            values[0] = values[0] - values[1]
          break;

          default: 
          console.log("Bug Found hehe")
        } 

        values[1] = 0

        this.setState({
          displayValue: values[0],
          operation: finish ? null : operation,
          current: finish ? 0 : 1,
          clearDisplay: !finish,
          values
        })
      }
    }

    addDigit(n) {
      if(n === '.' && this.state.displayValue.includes('.')) {
        return 
      }

      const clearDisplay = this.state.displayValue === '0'
        || this.state.clearDisplay 

      const currentValue = clearDisplay ? '' : this.state.displayValue

      if(digits < 10){
        const displayValue = currentValue + n
        this.setState({displayValue, clearDisplay: false})
         
        if(n !== '.') {
          const i = this.state.current
          const newValue = parseFloat(displayValue)
          const values = [...this.state.values]
          values[i] = newValue
          this.setState({ values })
          
          console.log(values)

          digits += 1
        }
      }
    }

    render() {
      return (
        <div className="calculator"> 
          <Display value={this.state.displayValue}/>
          <Button label="AC" click={this.clearMemory} triple/>
          <Button label="÷"  click={this.setOperation} operation/>
          <Button label="7"  click={this.addDigit}/>
          <Button label="8"  click={this.addDigit}/>
          <Button label="9"  click={this.addDigit}/>
          <Button label="x"  click={this.setOperation} operation/>
          <Button label="4"  click={this.addDigit}/>
          <Button label="5"  click={this.addDigit}/>
          <Button label="6"  click={this.addDigit}/>
          <Button label="-"  click={this.setOperation} operation/>
          <Button label="1"  click={this.addDigit}/>
          <Button label="2"  click={this.addDigit}/>
          <Button label="3"  click={this.addDigit}/>
          <Button label="+"  click={this.setOperation} operation/>
          <Button label="0"  click={this.addDigit} double/>
          <Button label="."  click={this.addDigit}/>
          <Button label="="  click={this.setOperation} operation/>
        </div>
      ) 
    }
}