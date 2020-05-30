import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserRes } from './entity/res/userRes';
import { catchError } from 'rxjs/operators';
import { Path } from 'src/app/utils/path';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private jsonUser ='/assets/data/user/user.json';
  private jsonUsers ='/assets/data/user/users.json';
  private urlRoot = Path.ROOT_URL;
  constructor(private http :HttpClient) { }

  getDetail():Observable<UserRes>{
    return this.http.get<UserRes>(this.jsonUser)
    .pipe(catchError(this.errorHandler));
  }

  getListUser():Observable<UserRes[]>{
    return this.http.get<UserRes[]>(this.urlRoot+'/users')
    .pipe(catchError(this.errorHandler));
  }

  getDetailUser(id :any): Observable<UserRes>{
    return this.http.get<UserRes>(this.urlRoot+'/users'+'/'+id).
    pipe(catchError(this.errorHandler));
  }
  
  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
