import { Component, OnInit } from "@angular/core";
import { Employee } from "./entity/Employess";
import { HeroService } from "src/app/service/hero/hero.service";
import { EmployeeService } from "src/app/service/employee/employee.service";
import { Router } from "@angular/router";
import { CommentService } from "src/app/service/comment/comment.service";
import { UserService } from "src/app/service/user/user.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public name: string;
  public valueInput = "test value";
  public checkValue = false;
  public classStype = "text-success";
  public checkCss = false;
  public classes = {
    "text-success": true,
    "text-danger": false,
    "text-special": true,
  };
  public checkStyle = false;
  public valueStyleRed = "red";
  public valueStyleBlue = "blue";
  public styles = {
    color: "yellow",
    "font-style": "oblique",
    display: "block",
    "font-size": "20px",
    "font-weight": "700",
  };

  public dataValue: number;
  public dataEvent;
  public nameBind;
  public valueSwitch = 1;
  public colors = ["yellow", "blue", "green"];
  public valueSend: string;
  public dataDate = new Date();
  public employee = new Employee();
  public lstEmployee = [];
  public employeeValue = { userId: 0, id: 0, title: "", completed: true };
  public lstIEmployee = [];
  public errorMessage: any;
  public lstComment = [];
  public user: any;

  // dependency injection of service
  constructor(
    private heroService: HeroService,
    private employeeService: EmployeeService,
    private router: Router,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.name = "long";
    this.classes["text-danger"] = true;
    this.dataValue = 0;
    this.valueSend = "value send";
    this.employee.name = "long";
    this.employee.id = 2;
    this.lstEmployee = this.heroService.getEmployee();
    // get detail data by api json
    // this.employeeService.getDetailApi(10)
    // .subscribe(data => this.employeeValue = data,
    //         error => this.errorMessage = error);
    // get list data by api json
    this.employeeService.getListApi().subscribe(
      (data) => (this.lstIEmployee = data),
      (error) => (this.errorMessage = error)
    );
    this.commentService
      .getCommnet(2)
      .subscribe((data) => (this.lstComment = data));
    // get detail data by json fake
    this.userService.getDetail().subscribe((data) => (this.user = data));
  }

  getName() {
    return this.name;
  }

  setData(): void {
    this.dataValue++;
  }
  // event: event của các sự kiện
  checkEvent(event): void {
    this.dataEvent = event;
  }

  getValueInput(inputValue) {
    this.dataEvent = inputValue;
  }

  public child = { name: "", age: 0 };

  receive(event) {
    this.child = event;
  }

  onSelectValue(employee) {
    // {/parameter/id}
    this.router.navigate(["/parameter", employee.id]);
    // call router {/parameter/id/idUser}
    this.router.navigate(["/parameter", employee.id, employee.userId]);
  }
}
