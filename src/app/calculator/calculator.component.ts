import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // string that will be displayed in the result input element
  currentNumber = '0'
  // value of the first operand of the operation
  firstOperand = null
  // operation
  operator = null
  // boolean value indicating if ready to enter the second operand of the operation
  waitForSecondNumber = false

  constructor() { }

  ngOnInit() {
  }

  // used to reset calculations
  public clear() {
    this.currentNumber = '0'
    this.firstOperand = null
    this.operator = null
    this.waitForSecondNumber = false
  }

  public getNumber(s: string) {
    if (this.waitForSecondNumber) {
      this.currentNumber = s
      this.waitForSecondNumber = false
    } else {
      this.currentNumber === '0' ? this.currentNumber = s : this.currentNumber += s

    }
  }

  getDecimal() {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.'
    }
  }

  private doCalculation(op, secondOp) {
    switch (op) {
      case '+':
        return this.firstOperand += secondOp
      case '-':
        return this.firstOperand -= secondOp
      case '*':
        return this.firstOperand *= secondOp
      case '/':
        return this.firstOperand /= secondOp
      case '=':
        return secondOp
    }
  }

  public getOperation(op: string) {

    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber)

    } else if (this.operator) {
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result)
      this.firstOperand = result
    }
    this.operator = op
    this.waitForSecondNumber = true

    console.log(this.firstOperand)

  }

}
