import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    HeroesListComponent,
    AddFormComponent
  ]
})
export class DbzModule { }
