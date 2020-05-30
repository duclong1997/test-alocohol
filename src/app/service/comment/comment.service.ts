import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CommentRes } from './entity/res/CommentRes';
import { catchError } from 'rxjs/operators';
import { Path } from 'src/app/utils/path';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = Path.ROOT_URL;
  constructor(private http: HttpClient) { }

  getCommnet(id: number):Observable<CommentRes[]>{
    let params = new HttpParams();
    params = params.append("postId", id.toString());

    return this.http.get<CommentRes[]>(this.url+'/comments', {params: params})
    .pipe(catchError(this.errorHandler))
  }

  getListComments():Observable<CommentRes[]>{
    return this.http.get<CommentRes[]>(this.url+'/comments')
    .pipe(catchError(this.errorHandler));
  }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
