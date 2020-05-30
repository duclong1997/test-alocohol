import { Injectable } from '@angular/core';
import { Path } from 'src/app/utils/path';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PosterRes } from './entity/res/posterRes';
import { catchError } from 'rxjs/operators';
import { CommentRes } from '../comment/entity/res/CommentRes';

@Injectable({
  providedIn: 'root'
})
export class PosterService {

  private urlRoot = Path.ROOT_URL;
  constructor(private http :HttpClient) { }

  getListPoster():Observable<PosterRes[]>{
    return this.http.get<PosterRes[]>(this.urlRoot+'/posts')
    .pipe(catchError( this.errorHandler));
  }

  getDetailPoster(id :number):Observable<PosterRes>{
    return this.http.get<PosterRes>(this.urlRoot+'/posts'+'/'+id)
    .pipe(catchError(this.errorHandler));
  }

  getLitCommentByPoster(idPoster: number):Observable<CommentRes[]>{
    return this.http.get<CommentRes[]>(this.urlRoot+'/posts/'+idPoster+'/comments')
    .pipe(catchError(this.errorHandler));
  }
  
  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
