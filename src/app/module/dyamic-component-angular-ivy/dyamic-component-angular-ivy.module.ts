import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DyamicComponentAngularIvyRoutingModule } from "./dyamic-component-angular-ivy-routing.module";
import { DynamicCptAngularIvyComponent } from "./dynamic-cpt-angular-ivy/dynamic-cpt-angular-ivy.component";
import { DynamicCptOneComponent } from "./dynamic-cpt-one/dynamic-cpt-one.component";
import { DynamicCptTwoComponent } from "./dynamic-cpt-two/dynamic-cpt-two.component";

@NgModule({
  declarations: [
    DynamicCptAngularIvyComponent,
    DynamicCptOneComponent,
    DynamicCptTwoComponent,
  ],
  imports: [CommonModule, DyamicComponentAngularIvyRoutingModule],
})
export class DyamicComponentAngularIvyModule {}
