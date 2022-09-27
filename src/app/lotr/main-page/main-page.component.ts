import { Component, OnInit } from '@angular/core';

const TITLE = 'The Lord of the Rings';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public title: string = TITLE;

  constructor() { }

  ngOnInit(): void {
  }
}