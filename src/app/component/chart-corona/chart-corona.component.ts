import { Component, OnInit } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import { CoronaService } from "src/app/service/corona/corona.service";
import { DataModel } from "./entity/model/dataModel";

@Component({
  selector: "app-chart-corona",
  templateUrl: "./chart-corona.component.html",
  styleUrls: ["./chart-corona.component.css"],
})
export class ChartCoronaComponent implements OnInit {
  constructor(private coronaService: CoronaService) {}

  // data
  lineChartData: ChartDataSets[];

  // text label
  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  // chart type
  lineChartType = "line";
  lineChartLegend = true;
  lineChartPlugins = [];

  lineChartColors: Color[];

  private liststatisticCoro: any;
  private errorMess: any;
  private listCoronaFeatures = [];
  private dataMainLanchina = new DataModel();
  private dataOtherLocation = new DataModel();
  private listMainChina = [];
  private listOtherLocation = [];

  ngOnInit() {
    this.lineChartLabels = [];

    this.coronaService.getStatisticCorona().subscribe(
      (data) => {
        this.liststatisticCoro = data;
        this.listCoronaFeatures = this.liststatisticCoro.features;
        for (let i = 0; this.listCoronaFeatures.length; i++) {
          this.lineChartLabels[i] = this.listCoronaFeatures[
            i
          ].attributes.Report_Date_String;
          this.listMainChina[i] = this.listCoronaFeatures[
            i
          ].attributes.Mainland_China;
          this.listOtherLocation[i] = this.listCoronaFeatures[
            i
          ].attributes.Other_Locations;
        }
      },
      (error) => (this.errorMess = error)
    );

    this.dataMainLanchina.data = this.listMainChina;
    this.dataMainLanchina.label = "Main China";

    this.dataOtherLocation.data = this.listOtherLocation;
    this.dataOtherLocation.label = "Other location";

    // data statistic chart
    this.lineChartData = [];
    this.lineChartData.push(this.dataOtherLocation);
    this.lineChartData.push(this.dataMainLanchina);

    this.lineChartColors = [
      {
        borderColor: "black",
        backgroundColor: "rgba(255,255,0,0.28)",
      },
      {
        borderColor: "white",
        backgroundColor: "rgba(255,255,0,0.28)",
      },
    ];
  }
}
