import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/service/corona/corona.service';

@Component({
  selector: 'app-corona-graphy',
  templateUrl: './corona-graphy.component.html',
  styleUrls: ['./corona-graphy.component.css']
})
export class CoronaGraphyComponent implements OnInit {

  private errorMessage: any;
  private coronaInfo :any;
  private coronaTotal: any;
  private coronaContry: any;
  private coronaStatistic: any;
  private listCountryCorona: any;
  constructor(private coronaService : CoronaService) { }

  ngOnInit() {

    // list info death, confirm, recovered of corona
    this.coronaService.getInfoCorona(0, 200).subscribe(data =>{
      this.coronaInfo = data;
    },
    error => this.errorMessage = error);

    // get total deaths, confirmed, recovered of corona in the word
    this.coronaService.getTotal().subscribe(data => this.coronaTotal = data,
      error => this.errorMessage = error);

    // get corona by country
    this.coronaService.getCoronaByCountry('Cyprus').subscribe(data => this.coronaContry =data,
      error => this.errorMessage = error);

    // get statistic corona
    this.coronaService.getStatisticCorona().subscribe(data => this.coronaStatistic = data,
      error => this.errorMessage = error);

    // get all country corona
    this.coronaService.getAllCountryCorona().subscribe(data => this.listCountryCorona = data,
      error => this.errorMessage = error);
  }

}
