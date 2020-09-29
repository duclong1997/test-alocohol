import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/service/todo/todo.service";
import { Constant } from "src/app/utils/constant";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-list-todo",
  templateUrl: "./list-todo.component.html",
  styleUrls: ["./list-todo.component.css"],
})
export class ListTodoComponent implements OnInit {
  listTodo = [];
  messageError: string;
  offset = Constant.offset;
  limit = Constant.limit;
  numberPage = 0;
  page = 0;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todoService.getListTodo().subscribe(
      (data) => {
        this.listTodo = data;
        // get number page
        this.numberPage = Math.ceil(data.length / this.limit);
      },
      (error) => (this.messageError = error)
    );

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.limit = parseInt(param.get("size"));
      this.offset = (parseInt(param.get("page")) - 1) * this.limit;
      this.page = parseInt(param.get("page"));
    });
  }
}
