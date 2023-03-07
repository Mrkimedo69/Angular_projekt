import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        SharedModule, 
        CommonModule,
        RouterModule
    ],
    exports: [HeaderComponent]
})

export class CoreModule{}