import { NgModule } from "@angular/core";
import { CounterModule } from "./counter/counter.module";
import { HeroesModule } from "./heroes/heroes.module";

@NgModule({
  imports: [
    CounterModule,
    HeroesModule
  ]
})
export class ComponentsModule { }
