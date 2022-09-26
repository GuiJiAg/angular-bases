import { Component, OnInit } from '@angular/core';

const HERO_NAME_0 = 'Ironman';
const HERO_NAME_1 = 'Spiderman';
const HERO_NAME_2 = 'Hulk';
const HERO_NAME_3 = 'Thor';
const HERO_LIST = [
  HERO_NAME_0,
  HERO_NAME_1,
  HERO_NAME_2,
  HERO_NAME_3
];
const ZERO = 0;
const ONE = 1;

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {
  public heros: string[] = [];
  public lastHeroAddedOrRemoved: string | boolean = false;

  //Primero se lanza el constructor
  constructor() { }

  //Segundo se lanza el ngOnInit
  ngOnInit(): void {
    this.getHerosList();
  }

  getHerosList(): void {
    for (let hero of HERO_LIST) {
      this.heros.push(hero);
    }
  }

  addLastHero(): void {
    let lastIndex: number = this.heros.length;

    if (lastIndex !== HERO_LIST.length) {
      let hero = HERO_LIST[lastIndex];

      this.heros.push(hero);
      this.lastHeroAddedOrRemoved = hero;
    }
  }

  removeLastHero(): void {
    let lastIndex: number = this.heros.length;

    if (lastIndex !== ZERO) {
      let currentIndex: number = lastIndex - ONE;

      this.lastHeroAddedOrRemoved = this.heros[currentIndex];
      this.heros.splice(currentIndex, ONE);
    }
  }
}
