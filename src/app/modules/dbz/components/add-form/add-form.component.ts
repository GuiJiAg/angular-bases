import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Constants } from '../../../../Utils/constants';
import { Hero } from '../../interfaces/hero';
import { v4 as uuid} from 'uuid';

const {
  EMPTY_TEXT,
  ZERO_NUMBER,
  BOOLEAN_TRUE,
  BOOLEAN_FALSE,
  DBZ_MAIN_PAGE_FORM_TITLE_TEXT,
  DBZ_MAIN_PAGE_ADD_BUTTON_TEXT,
  DBZ_ADD_FORM_INPUT_HERO_NAME_NAME,
  DBZ_ADD_FORM_INPUT_HERO_POWER_NAME,
  DBZ_ADD_FORM_INPUT_HERO_NAME_PLACEHOLDER,
  DBZ_ADD_FORM_INPUT_HERO_POWER_PLACEHOLDER,
  DBZ_ADD_FORM_INPUT_HERO_NAME_INIT_VALUE,
  DBZ_ADD_FORM_INPUT_HERO_POWER_INIT_VALUE
} = new Constants();

@Component({
  selector: 'app-add-form',
  standalone: false,

  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {
  public addFormTitle: string = DBZ_MAIN_PAGE_FORM_TITLE_TEXT;
  public addButtonText: string = DBZ_MAIN_PAGE_ADD_BUTTON_TEXT;
  public inputHeroNameName: string = DBZ_ADD_FORM_INPUT_HERO_NAME_NAME;
  public inputHeroPowerName: string = DBZ_ADD_FORM_INPUT_HERO_POWER_NAME;
  public inputHeroNamePlaceholder: string = DBZ_ADD_FORM_INPUT_HERO_NAME_PLACEHOLDER;
  public inputHeroPowerPlaceholder: number = DBZ_ADD_FORM_INPUT_HERO_POWER_PLACEHOLDER;

  @Output()
  public onNewHero: EventEmitter<Hero> = new EventEmitter<Hero>();

  public inputHero: Hero = {
    id: EMPTY_TEXT,
    name: DBZ_ADD_FORM_INPUT_HERO_NAME_INIT_VALUE,
    power: DBZ_ADD_FORM_INPUT_HERO_POWER_INIT_VALUE
  };

  emitHero(): void {
    console.log(this.inputHero);
    if (this.checkInputHeroValues()) {
      this.inputHero.id = uuid();
      this.onNewHero.emit(this.inputHero);
    }

    this.initInputHero();
  }

  private initInputHero(): void {
    this.inputHero = {
      id: EMPTY_TEXT,
      name: DBZ_ADD_FORM_INPUT_HERO_NAME_INIT_VALUE,
      power: DBZ_ADD_FORM_INPUT_HERO_POWER_INIT_VALUE
    };
  }

  private checkInputHeroValues(): boolean {
    if (
      this.inputHero.name === EMPTY_TEXT
      || this.inputHero.power === ZERO_NUMBER
    ) {
      return BOOLEAN_FALSE;
    }

    return BOOLEAN_TRUE;
  }
}
