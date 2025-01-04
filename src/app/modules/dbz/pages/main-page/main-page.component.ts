import { Component, OnInit } from '@angular/core';
import { Constants } from '../../../../Utils/constants';import { Hero } from '../../interfaces/hero';
import { DbzService } from '../../services/dbz.service';
;

const {
  ONE_NUMBER,
  DBZ_MAIN_PAGE_TITLE_TEXT,
  DBZ_MAIN_PAGE_SUBTITLE_TEXT
} = new Constants();

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,

  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  public title: string = DBZ_MAIN_PAGE_TITLE_TEXT;
  public subtitle: string = DBZ_MAIN_PAGE_SUBTITLE_TEXT;
  public heroesList: Hero[] = new Array<Hero>();

  constructor(
    private dbzService: DbzService
  ) {

  }

  ngOnInit(): void {
    this.initHeroesList();
  }

  addNewHero(hero: Hero): void {
    this.heroesList.unshift(hero);
  }

  deleteHero(id: string): void {
    this.heroesList = this.dbzService.deleteHero(this.heroesList, id);
  }

  private initHeroesList(): void {
    let heroesList: Array<Hero> = this.dbzService.initHeroesList();

    heroesList.forEach(hero => {
      this.heroesList.push(hero);
    });
  }
}
