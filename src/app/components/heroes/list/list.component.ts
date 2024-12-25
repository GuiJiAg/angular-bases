import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../Utils/constants';

const {
  EMPTY_TEXT,
  ZERO_NUMBER,
  BOOLEAN_TRUE,
  BOOLEAN_FALSE,
  HEROES_LIST_TITLE_TEXT,
  HERO_DELETE_BUTTON_TEXT,
  HEROES_RESET_BUTTON_TEXT,
  HERO_DELETED_TEXT,
  HERO_NOT_DELETED,
  HEROES_LIST_EXAMPLE_VALUES
} = new Constants();

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  public title: string = HEROES_LIST_TITLE_TEXT;
  public deleteLastHeroButtonText: string = HERO_DELETE_BUTTON_TEXT;
  public resetHeroeslistButtonText: string = HEROES_RESET_BUTTON_TEXT;
  public heroDeletedText: string = HERO_DELETED_TEXT;
  public heroNotDeletedText: string = HERO_NOT_DELETED;

  public heroesList: string[] = new Array<string>();
  public deletedHero?: string = EMPTY_TEXT;
  public existDeletedHeroes: boolean = BOOLEAN_FALSE;
  public heroesListIsEmpty: boolean = BOOLEAN_FALSE;

  ngOnInit(): void {
    this.initHeroesList();
  }

  deleteLastHero(): void {
    this.deletedHero = this.heroesList.pop();
    this.existDeletedHeroes = BOOLEAN_TRUE;

    if (this.heroesList.length <= ZERO_NUMBER) {
      this.heroesListIsEmpty = BOOLEAN_TRUE;
    }
  }

  resetList(): void {
    this.heroesList = new Array<string>();
    this.initHeroesList();
    this.deletedHero = EMPTY_TEXT;
    this.existDeletedHeroes = BOOLEAN_FALSE;
    this.heroesListIsEmpty = BOOLEAN_FALSE;
  }

  private initHeroesList(): void {
    HEROES_LIST_EXAMPLE_VALUES.forEach(hero => {
      this.heroesList.push(hero);
    });
  }
}
