import { Component } from '@angular/core';
import { Constants } from '../../../Utils/constants';

const {
  EMPTY_TEXT,
  ZERO_NUMBER,
  BOOLEAN_TRUE,
  BOOLEAN_FALSE,
  HERO_NAME_TEXT,
  HERO_AGE_TEXT,
  HERO_METHOD_TEXT,
  HERO_CAPITALIZED_TEXT,
  HERO_CHANGE_NAME_BUTTON_TEXT,
  HERO_CHANGE_AGE_BUTTON_TEXT,
  HERO_RESET_BUTTON_TEXT,
  HERO_CHANGE_NAME_EXAMPLE_VALUE,
  HERO_CHANGE_AGE_EXAMPLE_VALUE
} = new Constants();

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public heroNameText: string = HERO_NAME_TEXT;
  public heroAgeText: string = HERO_AGE_TEXT;
  public heroMethodText: string = HERO_METHOD_TEXT;
  public heroCapitalizedText: string = HERO_CAPITALIZED_TEXT;
  public heroChangeNameButtonText: string = HERO_CHANGE_NAME_BUTTON_TEXT;
  public heroChangeAgeButtonText: string = HERO_CHANGE_AGE_BUTTON_TEXT;
  public heroResetButtonText: string = HERO_RESET_BUTTON_TEXT;
  public heroChangeNameExampleValue: string = HERO_CHANGE_NAME_EXAMPLE_VALUE;
  public heroChangeAgeExampleValue: number = HERO_CHANGE_AGE_EXAMPLE_VALUE;
  public heroChangeNameButtonIsAvailable: boolean = BOOLEAN_TRUE;
  public heroChangeAgeButtonIsAvailable: boolean = BOOLEAN_TRUE;
  public heroResetButtonIsAvailable: boolean = BOOLEAN_FALSE;

  public heroName: string = EMPTY_TEXT;
  public heroAge: number = ZERO_NUMBER;

  get getHeroName(): string {
    return this.heroName;
  }

  get getHeroAge(): number {
    return this.heroAge;
  }

  setHeroName(value: string): void {
    this.heroName = value;
    this.disableChangeNameButton();
    this.avaibleResetButton();
  }

  setHeroAge(value: number): void {
    this.heroAge = value;
    this.disableChangeAgeButton();
    this.avaibleResetButton();
  }

  getHeroDescription(): string {
    return `${this.heroName} - ${this.heroAge}`;
  }

  reset(): void {
    this.heroName = EMPTY_TEXT;
    this.heroAge = ZERO_NUMBER;
    this.avaibleChangeNameButton();
    this.avaibleChangeAgeButton();
    this.disableResetButton();
  }

  private avaibleChangeNameButton(): void {
    this.heroChangeNameButtonIsAvailable = BOOLEAN_TRUE;
  }

  private avaibleChangeAgeButton(): void {
    this.heroChangeAgeButtonIsAvailable = BOOLEAN_TRUE;
  }

  private avaibleResetButton(): void {
    this.heroResetButtonIsAvailable = BOOLEAN_TRUE;
  }


  private disableChangeNameButton(): void {
    this.heroChangeNameButtonIsAvailable = BOOLEAN_FALSE;
  }

  private disableChangeAgeButton(): void {
    this.heroChangeAgeButtonIsAvailable = BOOLEAN_FALSE;
  }

  private disableResetButton(): void {
    this.heroResetButtonIsAvailable = BOOLEAN_FALSE;
  }
}
