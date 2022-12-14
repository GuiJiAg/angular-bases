import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HerosModule } from './heros/heros.module';
import { CounterModule } from './counter/counter.module';
import { LotrModule } from './lotr/lotr.module';

@NgModule({
  //Componentes agrupados en este módulo
  declarations: [
    AppComponent
  ],
  //Módulos importados a este módulo
  imports: [
    BrowserModule,
    CounterModule,
    HerosModule,
    LotrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
