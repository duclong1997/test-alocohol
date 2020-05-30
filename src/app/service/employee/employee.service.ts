import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { IEmployee } from './entity/res/IEmployee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { UserRegisterRes } from './entity/req/UserRegisterReq';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url ="https://jsonplaceholder.typicode.com/todos/";

  constructor(private htpp: HttpClient) { }

  // url/:id (PathVariable)
  getDetailApi(id: number): Observable<IEmployee>{
    return this.htpp.get<IEmployee>(this.url+id)
    .pipe(catchError(this.errorHandler));
  }

  // url
  getListApi():Observable<IEmployee[]>{
    return this.htpp.get<IEmployee[]>(this.url)
    .pipe(catchError(this.errorHandler));
  }

  // url?param1=121&param2=sfdd (param)
  getByParameter(name: string, id: number): Observable<IEmployee[]>{
    // params
    let params = new HttpParams();
    params = params.append('name',name);
    params = params.append('id',id.toString());

    return this.htpp.get<IEmployee[]>(this.url, {params: params})
    .pipe(catchError(this.errorHandler));
  }

  // header
  getByHeader(name: string): Observable<IEmployee[]>{
    // headers
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type','application/json');
    headers = headers.append('Authorization',name);

    return this.htpp.get<IEmployee[]>(this.url, {headers: headers})
    .pipe(catchError(this.errorHandler));
  }

  // param and header
  getByParamsAndHeader(name: string, id: number):Observable<IEmployee[]>{
    // headers
    let header = new HttpHeaders();
    header = header.append('Content-Type','application/json');
    header = header.append('Authorization',name);
    // params
    let param = new HttpParams();
    param = param.append('name',name);
    param = param.append('id',id.toString());

    return this.htpp.post<IEmployee[]>(this.url, {headers: header, params: param})
    .pipe(catchError(this.errorHandler));
  }

    // header and request
    getByRequestAndHeader(name: string, userResgisterRes : UserRegisterRes):Observable<IEmployee[]>{
      // headers
      let header = new HttpHeaders();
      header = header.append('Content-Type','application/json');
      header = header.append('Authorization',name);

      return this.htpp.post<IEmployee[]>(this.url, userResgisterRes, {headers: header})
      .pipe(catchError(this.errorHandler));
    }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
