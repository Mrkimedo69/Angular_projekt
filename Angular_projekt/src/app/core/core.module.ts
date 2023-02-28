import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "./components/header/header.component";


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        SharedModule, 
        CommonModule,
        AppRoutingModule],
    exports: [HeaderComponent]
})

export class CoreModule{}