import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/service/user/user.service";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"],
})
export class ListUserComponent implements OnInit {
  lstUser: any;
  constructor(private userservice: UserService) {}

  ngOnInit() {
    this.userservice.getListUser().subscribe((data) => (this.lstUser = data));
  }
}
