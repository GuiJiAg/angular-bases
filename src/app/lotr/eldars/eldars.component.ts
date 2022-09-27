import { Component, OnInit } from '@angular/core';
import { Eldar } from '../../models/eldar';
import { Constants } from '../../utils/constants';
import { EldarsService } from '../services/eldars.service';

@Component({
  selector: 'app-eldars',
  templateUrl: './eldars.component.html',
  styleUrls: ['./eldars.component.css']
})
export class EldarsComponent implements OnInit {
  public eldars: Eldar[] = new Array();

  constructor(
    private eldarsService: EldarsService
  ) { }

  ngOnInit(): void {
    this.eldarsService.eldarsObservable.subscribe(eldars => this.eldars = eldars);
  }

  printSpaceAndSlash(): string {
    return `
      ${Constants.SPACE}
      ${Constants.SLASH}
      ${Constants.SPACE}
    `;
  }
}
