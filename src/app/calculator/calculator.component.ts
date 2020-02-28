import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  // string that will be displayed in the result input element
  currentNumber = '0';
  // value of the first operand of the operation
  firstOperand = null;
  // operation
  operator = null;
  // boolean value indicating if ready to enter the second operand of the operation
  waitForSecondNumber = false;

  constructor() { }

  ngOnInit() {
  }

}
