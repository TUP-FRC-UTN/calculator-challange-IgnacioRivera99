import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorComponent } from "./calculator/calculator.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;
  setResult(res: number){
    console.log(res);
    this.result = res;
  }
  clear(){
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }
}
