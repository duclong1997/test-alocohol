import { Component, OnInit } from "@angular/core";
import { ForecastService } from "src/app/service/forecast/forecast.service";

@Component({
  selector: "app-weather",
  templateUrl: "./weather.component.html",
  styleUrls: ["./weather.component.css"],
})
export class WeatherComponent implements OnInit {
  currentweather: any;
  weatherForecast = { data: [] };
  constructor(private foreCastService: ForecastService) {}

  ngOnInit() {
    this.foreCastService
      .getCurrentWeather()
      .subscribe((data) => (this.currentweather = data));
    this.foreCastService
      .getWeatherForecast()
      .subscribe((data) => (this.weatherForecast = data));
  }
}
