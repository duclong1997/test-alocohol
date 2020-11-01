import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DynamicCptAngularIvyComponent } from "./dynamic-cpt-angular-ivy/dynamic-cpt-angular-ivy.component";

const routes: Routes = [
  { path: "angular-ivy", component: DynamicCptAngularIvyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DyamicComponentAngularIvyRoutingModule {}
