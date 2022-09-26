import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { HerosListComponent } from './heros-list/heros-list.component';

@NgModule({
    //Componentes agrupados en este módulo
    declarations: [
        HeroComponent,
        HerosListComponent
    ],
    //Componentes que van a ser usados por otros módulos
    exports: [
        HeroComponent,
        HerosListComponent
    ],
    //Módulos importados a este módulo
    imports: [
        CommonModule
    ]
})
export class HerosModule {}