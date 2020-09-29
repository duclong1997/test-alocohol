import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/service/corona/corona.service";
import { ChartDataSets } from "chart.js";
import { Label, Color } from "ng2-charts";
import { DataModel } from "../chart-corona/entity/model/dataModel";

@Component({
  selector: "app-chart-corona-confirmed",
  templateUrl: "./chart-corona-confirmed.component.html",
  styleUrls: ["./chart-corona-confirmed.component.css"],
})
export class ChartCoronaConfirmedComponent implements OnInit {
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

  private errorMess: any;
  private listFeatures: any[];
  private dataConfirmed = new DataModel();
  private listData: any[];

  constructor(private coronaService: CoronaService) {}

  ngOnInit() {
    this.lineChartLabels = [];
    this.listData = [];

    this.coronaService.geteDeltaConfirmedLastUpdated("").subscribe(
      (data) => {
        this.listFeatures = data.features;
        for (let i = 0; i < this.listFeatures.length; i++) {
          // set label
          let value = new Date(this.listFeatures[i].attributes.Last_Update);
          // MM/dd/yyyy
          this.lineChartLabels[i] = value.toLocaleDateString();
          // set data
          this.listData[i] = this.listFeatures[i].attributes.Delta_Confirmed;
        }
      },
      (error) => (this.errorMess = error)
    );

    this.dataConfirmed.label = "Corona confirmed";
    this.dataConfirmed.data = this.listData;

    this.lineChartLabels = [
      "01-01-2020",
      "02-01-2020",
      "03-01-2020",
      "04-01-2020",
      "05-01-2020",
    ];

    this.lineChartData = [];
    this.lineChartData.push(this.dataConfirmed);

    this.lineChartColors = [
      {
        borderColor: "orange",
        backgroundColor: "rgba(255,255,0,0.28)",
      },
    ];
  }
}
