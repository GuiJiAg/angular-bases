import { NgModule } from "@angular/core";
import { UpperCasePipe } from '@angular/common';
import { HeroComponent } from "./hero.component";

@NgModule({
  declarations: [
    HeroComponent
  ],
  imports: [
    UpperCasePipe
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule { }
