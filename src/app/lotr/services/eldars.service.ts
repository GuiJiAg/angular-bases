import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Eldar } from 'src/app/models/eldar';
import { ELDARS } from '../../utils/mocks/eldars';

@Injectable({
  providedIn: 'root'
})
export class EldarsService {
  private _eldars: BehaviorSubject<Eldar[]> = new BehaviorSubject(ELDARS);
  public eldarsObservable: Observable<Eldar[]> = this._eldars.asObservable();

  constructor() { }

  addEldars(eldars: Eldar[]): void {
    this._eldars.next(eldars);
  }
}
