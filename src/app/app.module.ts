import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ChartsModule } from "ng2-charts";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartCoronaConfirmedComponent } from "./component/chart-corona-confirmed/chart-corona-confirmed.component";
import { ChartCoronaComponent } from "./component/chart-corona/chart-corona.component";
import { Child1DetailComponent } from "./component/child1-detail/child1-detail.component";
import { Child2DetailComponent } from "./component/child2-detail/child2-detail.component";
import { CommentComponent } from "./component/comment/comment.component";
import { CoronaCountryComponent } from "./component/corona-country/corona-country.component";
import { CoronaDetailCoutryComponent } from "./component/corona-detail-coutry/corona-detail-coutry.component";
import { CoronaDetailComponent } from "./component/corona-detail/corona-detail.component";
import { CoronaGraphyComponent } from "./component/corona-graphy/corona-graphy.component";
import { DetailForcastComponent } from "./component/detail-forcast/detail-forcast.component";
import { DetailPhotoComponent } from "./component/detail-photo/detail-photo.component";
import { DetailPostComponent } from "./component/detail-post/detail-post.component";
import { DetailTodoComponent } from "./component/detail-todo/detail-todo.component";
import { DetailComponent } from "./component/detail/detail.component";
import { ErrorComponent } from "./component/error/error.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { HomeComponent } from "./component/home/home.component";
import { ListAlbumPhotoComponent } from "./component/list-album-photo/list-album-photo.component";
import { ListAlbumComponent } from "./component/list-album/list-album.component";
import { ListPhotoComponent } from "./component/list-photo/list-photo.component";
import { ListPosterComponent } from "./component/list-poster/list-poster.component";
import { ListTodoComponent } from "./component/list-todo/list-todo.component";
import { ListUserComponent } from "./component/list-user/list-user.component";
import { MainComponent } from "./component/main/main.component";
import { PamameterComponent } from "./component/pamameter/pamameter.component";
import { ReactiveFormComponent } from "./component/reactive-form/reactive-form.component";
import { SearchNameComponent } from "./component/search-name/search-name.component";
import { TestReactiveFormComponent } from "./component/test-reactive-form/test-reactive-form.component";
import { WeatherComponent } from "./component/weather/weather.component";
import { UserNameApiDirective } from "./validator/user-name-api.directive";
import { DynamicComponentComponent } from "./component/dynamic-component/dynamic-component.component";
import { DynamicOneComponent } from "./component/dynamic-one/dynamic-one.component";
import { DynamicTwoComponent } from "./component/dynamic-two/dynamic-two.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    MainComponent,
    ErrorComponent,
    PamameterComponent,
    CommentComponent,
    Child1DetailComponent,
    Child2DetailComponent,
    ReactiveFormComponent,
    WeatherComponent,
    HomePageComponent,
    DetailForcastComponent,
    ListUserComponent,
    ListPosterComponent,
    DetailPostComponent,
    ListTodoComponent,
    DetailTodoComponent,
    ListPhotoComponent,
    DetailPhotoComponent,
    ListAlbumPhotoComponent,
    ListAlbumComponent,
    SearchNameComponent,
    CoronaGraphyComponent,
    CoronaCountryComponent,
    CoronaDetailCoutryComponent,
    CoronaDetailComponent,
    ChartCoronaComponent,
    ChartCoronaConfirmedComponent,
    TestReactiveFormComponent,
    UserNameApiDirective,
    DynamicComponentComponent,
    DynamicOneComponent,
    DynamicTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicTwoComponent, DynamicOneComponent],
})
export class AppModule {}
