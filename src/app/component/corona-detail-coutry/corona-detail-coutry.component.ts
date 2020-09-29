import { Component, OnInit } from "@angular/core";
import { CoronaService } from "src/app/service/corona/corona.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-corona-detail-coutry",
  templateUrl: "./corona-detail-coutry.component.html",
  styleUrls: ["./corona-detail-coutry.component.css"],
})
export class CoronaDetailCoutryComponent implements OnInit {
  countryDetailCorona: any;
  constructor(
    private coronaService: CoronaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      const nameCountry = param.get("name");
      this.coronaService
        .getCoronaByCountry(nameCountry)
        .subscribe((data) => (this.countryDetailCorona = data));
    });
  }
}
