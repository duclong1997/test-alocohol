import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TipTrackByComponent } from "./tip-track-by/tip-track-by.component";

const routes: Routes = [
  {
    path: "",
    component: TipTrackByComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipTrackByNgforRoutingModule {}
