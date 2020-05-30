import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee/employee.service';


@Component({
  selector: 'app-pamameter',
  templateUrl: './pamameter.component.html',
  styleUrls: ['./pamameter.component.css']
})
export class PamameterComponent implements OnInit {

  private employeeId;
  private employeeUserId;
  private hero= new Object();
  private messageError;
  constructor(private route: ActivatedRoute, private employeeService : EmployeeService, 
    private router: Router) { }

  ngOnInit() {

    // get path variable in router
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.employeeId = id;
    // let idUser = parseInt(this.route.snapshot.paramMap.get("idUser"));
    // this.employeeUserId = idUser | 0;

    // paramMap Observable (nên sử dụng)
    // get parameter in router
    this.route.paramMap.subscribe((param: ParamMap)=>{
      let id = parseInt(param.get('id'));
      this.employeeId = id | 1;
      let idUser = parseInt(param.get('idUser'));
      this.employeeUserId = idUser | 0;
      // get service by id
      this.employeeService.getDetailApi(this.employeeId).subscribe(data => this.hero = data,
      error => this.messageError = error);
    });

  }

  goPrevious(){
    this.employeeId --;
    this.router.navigate(['/parameter',this.employeeId]);
  }

  goNext(){
    this.employeeId ++;
    // call router
    this.router.navigate(['/parameter',this.employeeId]);
  }

  goBack(){
    let keyId = this.employeeId ? this.employeeId : null;
    // go back router '/main' with key
    // call router {/main;key=keyId}
    this.router.navigate(['/main', {key: keyId}]);
  }
}
