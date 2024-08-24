import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  @Input() number1: number = 0;
  @Input() number2: number = 0;
  @Output() result: EventEmitter<number> = new EventEmitter();
  @Output() clear: EventEmitter<void> = new EventEmitter()
  total: number = 0;
  sum(){
    this.total =  this.number1 + this.number2
    this.result.emit(this.total);
  }
  res(){
    this.result.emit(this.number1 - this.number2);
  }
  mul(){
    this.result.emit(this.number1 * this.number2);
  }
  pot(){
    this.result.emit(Math.pow(this.number1, this.number2));
  }
  div(){
    if(this.number2 > 0){
      this.result.emit(this.number1 / this.number2);
    }else{
      this.result.emit(0);
    }
  }
  ce(){
    this.clear.emit();
  }

}
