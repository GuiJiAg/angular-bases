import { Component, OnInit } from '@angular/core';
import { Constants } from '../../utils/constants';
import { EldarsService } from '../services/eldars.service';
import { Eldar } from 'src/app/models/eldar';
import { GeneralFunctions } from '../../utils/general-functions';

@Component({
  selector: 'app-form-new-eldar',
  templateUrl: './form-new-eldar.component.html',
  styleUrls: ['./form-new-eldar.component.css']
})
export class FormNewEldarComponent implements OnInit {
  public eldars: Eldar[] = new Array();
  public newEldar: Eldar = {
    eldarName: Constants.EMPTY,
    eldarPower: Constants.ZERO
  }

  constructor(
    private eldarsService: EldarsService
  ) { }

  ngOnInit(): void {
    this.eldarsService.eldarsObservable.subscribe(eldars => this.eldars = eldars);
  }

  addEldar(): void {
    if (this.checkNewEldarData()) {
      let newEldar: Eldar = GeneralFunctions.clone(this.newEldar);
      this.eldars.push(newEldar);
      this.eldarsService.addEldars(this.eldars);
    }
  }

  checkNewEldarData(): boolean {
    return this.checkNewEldarName() 
      && this.checkNewEldarPower();
  }

  checkNewEldarName(): boolean {
    return this.newEldar.eldarName.trim().length > Constants.ZERO;
  }

  checkNewEldarPower(): boolean {
    return this.newEldar.eldarPower > Constants.ZERO;
  }
}
