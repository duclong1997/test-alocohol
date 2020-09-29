import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { DetailComponent } from "./detail/detail.component";
import { HotelComponent } from "./hotel.component";
import { ListComponent } from "./list/list.component";
import { ServiceHotelComponent } from "./service-hotel/service-hotel.component";
import { UpdateComponent } from "./update/update.component";

const routes: Routes = [
  {
    path: "",
    component: HotelComponent,
    // path children routing
    children: [
      { path: "", component: ListComponent },
      { path: "detail", component: DetailComponent },
      { path: "update", component: UpdateComponent },
      { path: "create", component: CreateComponent },
    ],
  },

  {
    path: "service",
    component: ServiceHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
