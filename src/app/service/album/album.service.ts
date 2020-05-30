import { Injectable } from '@angular/core';
import { Path } from 'src/app/utils/path';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlbumRes } from './entity/res/albumRes';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private url = Path.ROOT_URL;

  constructor(private http :HttpClient) { }

  getListAlbum():Observable<AlbumRes[]>{
    return this.http.get<AlbumRes[]>(this.url+'/albums').
    pipe(catchError(this.errorHandler));
  }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
