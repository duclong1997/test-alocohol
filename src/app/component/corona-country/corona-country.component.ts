import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/service/corona/corona.service";

@Component({
  selector: "app-corona-country",
  templateUrl: "./corona-country.component.html",
  styleUrls: ["./corona-country.component.css"],
})
export class CoronaCountryComponent implements OnInit {
  coronaCountry: any;
  errorMess: any;
  arrayCoronaCountry = [];
  coronaInfor: any;
  constructor(private coronaService: CoronaService) {}

  ngOnInit() {
    this.coronaService.getAllCountryCorona().subscribe(
      (data) => {
        this.coronaCountry = data;
        this.arrayCoronaCountry = this.coronaCountry.features;
        // localeCompare: dùng để compare giữa 2 string
        // this.arrayCoronaCountry.sort((left, right)=> left.attributes.Country_Region.localeCompare(right.attributes.Country_Region) );
        // compare giữa 2 date
        this.arrayCoronaCountry.sort(
          (left, right) =>
            new Date(right.attributes.Last_Update).getTime() -
            new Date(left.attributes.Last_Update).getTime()
        );
        // compare by OBJECTID asc
        // this.arrayCoronaCountry.sort((left, right)=> left.attributes.OBJECTID - (right.attributes.OBJECTID) );
      },
      (error) => (this.errorMess = error)
    );
  }
}
