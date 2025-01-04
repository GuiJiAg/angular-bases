import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { Constants } from '../../../Utils/constants';
import { v4 as uuid} from 'uuid';

const {
  DBZ_MAIN_PAGE_FIRST_HERO_NAME,
  DBZ_MAIN_PAGE_FIRST_HERO_POWER,
  DBZ_MAIN_PAGE_SECOND_HERO_NAME,
  DBZ_MAIN_PAGE_SECOND_HERO_POWER,
  DBZ_MAIN_PAGE_THIRD_HERO_NAME,
  DBZ_MAIN_PAGE_THIRD_HERO_POWER,
  DBZ_MAIN_PAGE_FOURTH_HERO_NAME,
  DBZ_MAIN_PAGE_FOURTH_HERO_POWER
} = new Constants();

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  initHeroesList(): Array<Hero> {
    let firstHero: Hero = {
      id: uuid(),
      name: DBZ_MAIN_PAGE_FIRST_HERO_NAME,
      power: DBZ_MAIN_PAGE_FIRST_HERO_POWER
    };
    let secondHero: Hero = {
      id: uuid(),
      name: DBZ_MAIN_PAGE_SECOND_HERO_NAME,
      power: DBZ_MAIN_PAGE_SECOND_HERO_POWER
    };
    let thirdHero: Hero = {
      id: uuid(),
      name: DBZ_MAIN_PAGE_THIRD_HERO_NAME,
      power: DBZ_MAIN_PAGE_THIRD_HERO_POWER
    };
    let fourthHero: Hero = {
      id: uuid(),
      name: DBZ_MAIN_PAGE_FOURTH_HERO_NAME,
      power: DBZ_MAIN_PAGE_FOURTH_HERO_POWER
    };

    return [
      firstHero,
      secondHero,
      thirdHero,
      fourthHero
    ];
  }

  deleteHero(heroesList: Array<Hero>, id: string): Array<Hero> {
    return heroesList.filter((hero) => hero.id !== id);
  }
}
