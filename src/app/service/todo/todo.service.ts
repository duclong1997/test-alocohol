import { Injectable } from '@angular/core';
import { Path } from 'src/app/utils/path';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TodoRes } from './entity/res/TodoRes';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private url = Path.ROOT_URL;
  constructor(private http :HttpClient) { }

  getListTodo():Observable<TodoRes[]>{
    return this.http.get<TodoRes[]>(this.url+'/todos').
    pipe(catchError(this.errorHandler));
  }

  getDetail(id :number):Observable<TodoRes>{
    return this.http.get<TodoRes>(this.url+'/todos'+'/'+id).
    pipe(catchError(this.errorHandler));
  }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
