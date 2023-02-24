import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { SafePipe } from "./safeulr.pipe";

@NgModule({
    declarations: [SafePipe,DropdownDirective],
    exports: [SafePipe,DropdownDirective]
})

export class SharedModule{}