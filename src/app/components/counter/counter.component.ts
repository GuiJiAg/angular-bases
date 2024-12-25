import { Component } from "@angular/core";
import { Constants } from "../../Utils/constants";

const {
  BUTTON_ADD_TEXT,
  BUTTON_SUBSTRAC_TEXT,
  BUTTON_RESET_COUNTER_TEXT,
  VALUE_ADD_NUMBER,
  VALUE_SUBSTRAC_NUMBER,
  VALUE_INITIAL_COUNTER_NUMBER
} = new Constants();

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  standalone: false,
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public addButtonText: string = BUTTON_ADD_TEXT;
  public subtractButtonText: string = BUTTON_SUBSTRAC_TEXT;
  public resetCounterButtonText: string = BUTTON_RESET_COUNTER_TEXT;
  public addOne: number = VALUE_ADD_NUMBER;
  public subtractOne: number = VALUE_SUBSTRAC_NUMBER;
  public counter: number = VALUE_INITIAL_COUNTER_NUMBER;

  increasesBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = VALUE_INITIAL_COUNTER_NUMBER;
  }
}
