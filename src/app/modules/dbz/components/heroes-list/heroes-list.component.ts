import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constants } from '../../../../Utils/constants';
import { Hero } from '../../interfaces/hero';

const {
  EMPTY_TEXT,
  DBZ_MAIN_PAGE_LIST_TITLE_TEXT,
  DBZ_HEROES_LIST_EVEN_HERO_CLASS_LIST,
  DBZ_HEROES_LIST_DELETE_HERO_SYMBOL
} = new Constants();

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css'
})
export class HeroesListComponent {
  public listTitle: string = DBZ_MAIN_PAGE_LIST_TITLE_TEXT;
  public deleteHeroSymbol: string = DBZ_HEROES_LIST_DELETE_HERO_SYMBOL;

  @Input()
  public heroesList: Hero[] = new Array<Hero>();

  @Output()
  public onDeleteHero: EventEmitter<string> = new EventEmitter<string>();

  initEvenHeroClassList(isEven: boolean): string {
    return (isEven) ? DBZ_HEROES_LIST_EVEN_HERO_CLASS_LIST : EMPTY_TEXT;
  }

  eventDeleteHero(id: string): void {
    this.onDeleteHero.emit(id);
  }
}
