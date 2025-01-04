import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
