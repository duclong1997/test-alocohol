import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ForecastService } from "src/app/service/forecast/forecast.service";
import { CurrentWeather } from "src/app/service/forecast/entity/req/currentWeather";

@Component({
  selector: "app-detail-forcast",
  templateUrl: "./detail-forcast.component.html",
  styleUrls: ["./detail-forcast.component.css"],
})
export class DetailForcastComponent implements OnInit {
  idWeather: any;
  forcast: any;
  listData = [];
  detailForest: any;

  constructor(
    private route: ActivatedRoute,
    private forecastService: ForecastService
  ) {}

  ngOnInit() {
    this.forecastService.getWeatherForecast().subscribe((data) => {
      // get parameter in route
      this.route.paramMap.subscribe((param: ParamMap) => {
        this.idWeather = parseInt(param.get("id"));
      });

      this.forcast = data;
      this.listData = this.forcast.data;
      for (let i = 0; i < this.listData.length; i++) {
        if (this.listData[i].moonrise_ts == this.idWeather) {
          this.detailForest = this.listData[i];
        }
      }
    });
  }
}
