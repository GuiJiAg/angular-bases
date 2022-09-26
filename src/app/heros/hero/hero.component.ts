import { Component } from '@angular/core';

const TITLE = 'Héroes';
const HERO_NAME_1 = 'Ironman';
const HERO_NAME_2 = 'Spiderman';
const HERO_AGE_1 = 35;
const HERO_AGE_2 = 27;
const SPACE = ' ';
const SLASH = '-';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html'
})
export class HeroComponent {
    public title: string = TITLE;
    public heroName: string = HERO_NAME_1;
    public heroAge: number = HERO_AGE_1;

    obtainData(): string {
        return `
            ${this.heroName}
            ${SPACE}
            ${SLASH}
            ${SPACE}
            ${this.heroAge}
        `;
    }

    get heroNameToUpperCase(): string {
        return this.heroName.toUpperCase();
    }

    /*
        Si se cambia directamente una propiedad de la clase, esta cambiará
        por completo allá donde se invoque, es decir, lo hace de forma
        reactiva
    */
    changeHeroName(): void {
        if (this.heroName === HERO_NAME_1) {
            this.heroName = HERO_NAME_2;
        }
        else {
            this.heroName = HERO_NAME_1;
        }
    }

    changeHeroAge(): void {
        if (this.heroAge === HERO_AGE_1) {
            this.heroAge = HERO_AGE_2;
        }
        else {
            this.heroAge = HERO_AGE_1;
        }
    }
}