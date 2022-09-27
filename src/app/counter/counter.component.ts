import { Component } from '@angular/core';

import { Constants } from '../utils/constants';

const TITLE = 'Contador App'
const CURRENT_BASE = 1;

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})
export class CounterComponent {
    public title: string = TITLE;
    public base: number = CURRENT_BASE;
    public counter: number = Constants.ZERO;

    /*
        NOTA: No es necesario devolver el valor de las operaciones con un "return",
        ya que se está modificando una propiedad bindeada, la cual cambia de forma reactiva,
        es decir, a medida que cambia el valor en la clase, de forma automática cambia
        su valor allí donde se esté implementando la propiedad
    */
    addBase() {
        this.counter += this.base;
    }

    subtractBase() {
        this.counter -= this.base;
    }
}