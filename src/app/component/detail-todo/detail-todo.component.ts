import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TodoService } from 'src/app/service/todo/todo.service';
import { UserService } from 'src/app/service/user/user.service';
import { error } from 'protractor';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.css']
})
export class DetailTodoComponent implements OnInit {

  private idtodo :number;
  private todoDetail: any;
  private errorMessage : any;
  private userProfile: any;
  constructor(private route: ActivatedRoute, private todoService : TodoService,
    private userService : UserService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param :ParamMap)=>{
      this.idtodo = parseInt(param.get('id'));
      this.todoDetail = this.todoService.getDetail(this.idtodo).
      subscribe(data => {
        this.todoDetail = data;
        this.userService.getDetailUser(this.todoDetail.userId).subscribe(
          value => this.userProfile = value,
          error => this.errorMessage = error)
        },
        error => this.errorMessage = error);
    });
  }
}
