import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { DetailComponent } from './component/detail/detail.component';
import { MainComponent } from './component/main/main.component';
import { HttpClientModule} from '@angular/common/http';
import { ErrorComponent } from './component/error/error.component';
import { PamameterComponent } from './component/pamameter/pamameter.component';
import { CommentComponent } from './component/comment/comment.component';
import { Child1DetailComponent } from './component/child1-detail/child1-detail.component';
import { Child2DetailComponent } from './component/child2-detail/child2-detail.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { WeatherComponent } from './component/weather/weather.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { DetailForcastComponent } from './component/detail-forcast/detail-forcast.component';
import { ListUserComponent } from './component/list-user/list-user.component';
import { ListPosterComponent } from './component/list-poster/list-poster.component';
import { DetailPostComponent } from './component/detail-post/detail-post.component';
import { ListTodoComponent } from './component/list-todo/list-todo.component';
import { DetailTodoComponent } from './component/detail-todo/detail-todo.component';
import { ListPhotoComponent } from './component/list-photo/list-photo.component';
import { DetailPhotoComponent } from './component/detail-photo/detail-photo.component';
import { ListAlbumPhotoComponent } from './component/list-album-photo/list-album-photo.component';
import { ListAlbumComponent } from './component/list-album/list-album.component';
import { SearchNameComponent } from './component/search-name/search-name.component';
import { CoronaGraphyComponent } from './component/corona-graphy/corona-graphy.component';
import { CoronaCountryComponent } from './component/corona-country/corona-country.component';
import { CoronaDetailCoutryComponent } from './component/corona-detail-coutry/corona-detail-coutry.component';
import { CoronaDetailComponent } from './component/corona-detail/corona-detail.component';
import { ChartCoronaComponent } from './component/chart-corona/chart-corona.component';
import { ChartsModule } from 'ng2-charts';
import { ChartCoronaConfirmedComponent } from './component/chart-corona-confirmed/chart-corona-confirmed.component';
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
    ChartCoronaConfirmedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
