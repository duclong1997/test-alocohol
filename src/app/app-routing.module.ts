import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DetailComponent } from "./component/detail/detail.component";
import { MainComponent } from "./component/main/main.component";
import { ErrorComponent } from "./component/error/error.component";
import { PamameterComponent } from "./component/pamameter/pamameter.component";
import { Child1DetailComponent } from "./component/child1-detail/child1-detail.component";
import { Child2DetailComponent } from "./component/child2-detail/child2-detail.component";
import { WeatherComponent } from "./component/weather/weather.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { DetailForcastComponent } from "./component/detail-forcast/detail-forcast.component";
import { ListPosterComponent } from "./component/list-poster/list-poster.component";
import { DetailPostComponent } from "./component/detail-post/detail-post.component";
import { ListTodoComponent } from "./component/list-todo/list-todo.component";
import { DetailTodoComponent } from "./component/detail-todo/detail-todo.component";
import { ListPhotoComponent } from "./component/list-photo/list-photo.component";
import { DetailPhotoComponent } from "./component/detail-photo/detail-photo.component";
import { ListAlbumComponent } from "./component/list-album/list-album.component";
import { CoronaGraphyComponent } from "./component/corona-graphy/corona-graphy.component";
import { CoronaCountryComponent } from "./component/corona-country/corona-country.component";
import { CoronaDetailCoutryComponent } from "./component/corona-detail-coutry/corona-detail-coutry.component";
import { ChartCoronaComponent } from "./component/chart-corona/chart-corona.component";
import { TestReactiveFormComponent } from "./component/test-reactive-form/test-reactive-form.component";
import { DynamicComponentComponent } from "./component/dynamic-component/dynamic-component.component";

const routes: Routes = [
  // add module with path /hotel from module hotel (lazy load)
  {
    path: "hotel",
    loadChildren: () =>
      import("./hotel/hotel.module").then((result) => result.HotelModule),
  },

  // chart corona
  { path: "corona-chart", component: ChartCoronaComponent },
  // country detail corona
  {
    path: "corona-country-detail/:name",
    component: CoronaDetailCoutryComponent,
  },
  // country corona
  {
    path: "corona-country",
    component: CoronaCountryComponent,
  },
  // news corona
  {
    path: "corona-news",
    component: CoronaGraphyComponent,
  },
  // list album
  {
    path: "list-album",
    component: ListAlbumComponent,
  },
  // detail photo
  {
    path: "detail-photo/:id/:idAlbum",
    component: DetailPhotoComponent,
  },
  // list photo
  {
    path: "list-photo",
    component: ListPhotoComponent,
  },
  // detail todo
  {
    path: "detail-todo/:id",
    component: DetailTodoComponent,
  },
  // list todo (page, size)
  {
    path: "list-todo/:page/:size",
    component: ListTodoComponent,
  },
  // detail post
  {
    path: "detail/:id",
    component: DetailPostComponent,
  },
  // list poster
  {
    path: "list-poster",
    component: ListPosterComponent,
  },
  // default page (home-page)
  {
    path: "",
    redirectTo: "/home-page",
    pathMatch: "full",
  },
  // detail forcast
  {
    path: "detail-forcast/:id",
    component: DetailForcastComponent,
  },
  // home-page
  {
    path: "home-page",
    component: HomePageComponent,
  },
  // weather
  {
    path: "weather",
    component: WeatherComponent,
  },
  // create router
  {
    path: "detail",
    component: DetailComponent,
    // child path
    children: [
      { path: "child1", component: Child1DetailComponent },
      { path: "child2", component: Child2DetailComponent },
    ],
  },
  {
    path: "main",
    component: MainComponent,
  },
  // path variable
  {
    path: "parameter/:id",
    component: PamameterComponent,
  },
  {
    path: "parameter/:id/:idUser",
    component: PamameterComponent,
  },
  {
    path: "test-reactive-form",
    component: TestReactiveFormComponent,
  },
  {
    path: "dynamic-component",
    component: DynamicComponentComponent,
  },

  // page error
  {
    path: "**",
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // cho phép reload những module có thể load về được trước
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
