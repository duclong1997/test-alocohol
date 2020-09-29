import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HotelRoutingModule } from "./hotel-routing.module";
import { HotelComponent } from "./hotel.component";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";
import { CreateComponent } from "./create/create.component";
import { ServiceHotelComponent } from "./service-hotel/service-hotel.component";

@NgModule({
  declarations: [
    HotelComponent,
    DetailComponent,
    ListComponent,
    UpdateComponent,
    CreateComponent,
    ServiceHotelComponent,
  ],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
