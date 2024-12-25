import { NgModule } from "@angular/core";
import { HeroModule } from "./hero/hero.module";
import { ListModule } from "./list/list.module";

@NgModule({
  imports: [
    HeroModule,
    ListModule
  ]
})
export class HeroesModule { }
