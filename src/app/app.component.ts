import { Component } from '@angular/core';
import { Constants } from './Utils/constants';

const {
  MAIN_TITLE
} = new Constants();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = MAIN_TITLE;
}
