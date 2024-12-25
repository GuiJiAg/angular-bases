import { Component } from '@angular/core';
import { Constants } from '../../../../Utils/constants';

const {
  DBZ_MAIN_PAGE_LIST_TITLE_TEXT,
  DBZ_MAIN_PAGE_FIRST_HERO_NAME,
  DBZ_MAIN_PAGE_FIRST_HERO_POWER,
  DBZ_MAIN_PAGE_SECOND_HERO_NAME,
  DBZ_MAIN_PAGE_SECOND_HERO_POWER
} = new Constants();

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public listTitle: string = DBZ_MAIN_PAGE_LIST_TITLE_TEXT;
  public firstHeroName: string = DBZ_MAIN_PAGE_FIRST_HERO_NAME;
  public firstHeroPower: number = DBZ_MAIN_PAGE_FIRST_HERO_POWER;
  public secondHeroName: string = DBZ_MAIN_PAGE_SECOND_HERO_NAME;
  public secondHeroPower: number = DBZ_MAIN_PAGE_SECOND_HERO_POWER;
}
