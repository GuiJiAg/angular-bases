import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CounterComponent } from './counter.component';

@NgModule({
    //Componentes agrupados en este módulo
    declarations: [
        CounterComponent
    ],
    //Componentes que van a ser usados por otros módulos
    exports: [
        CounterComponent
    ],
    //Módulos importados a este módulo
    imports: [
        CommonModule
    ]
})
export class CounterModule {}