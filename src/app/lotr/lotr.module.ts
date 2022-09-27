import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { EldarsComponent } from './eldars/eldars.component';
import { FormNewEldarComponent } from './form-new-eldar/form-new-eldar.component';
import { EldarsService } from './services/eldars.service';



@NgModule({
  declarations: [
    MainPageComponent,
    EldarsComponent,
    FormNewEldarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [
    EldarsService
  ]
})
export class LotrModule { }
