import { ServiceHotelComponent } from './service-hotel/service-hotel.component';
import { CreateComponent } from './create/create.component';
import { Path } from './../utils/path';
import { UpdateComponent } from './update/update.component';
import { HotelComponent } from './hotel.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
{path : "", Component: HotelComponent,
// path children routing
children:[
    {path:"", Component: ListComponent},
    {path:"detail", Component: DetailComponent},
    {path:"update", Component: UpdateComponent},
    {Path: "create", Component:CreateComponent}
  ]
},

{path : "service", Component: ServiceHotelComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
