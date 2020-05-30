import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/service/forecast/forecast.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  private servereWeatherAlert;
  private searchValue ='ten';
  private forcast ={};
  constructor(private forecastService : ForecastService) { 
    this.servereWeatherAlert = new Object();
  }
  ngOnInit() {
    this.forecastService.getServereWeatherAlet().subscribe(data => this.servereWeatherAlert = data);
    this.forecastService.getWeatherForecast().subscribe(data => this.forcast = data);
  }

  search():void{  
    //TODO  
  }


  searchOnchange(): void{
    // TODO
  }

}
