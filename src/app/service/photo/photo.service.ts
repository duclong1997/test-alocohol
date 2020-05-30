import { Injectable } from '@angular/core';
import { Path } from 'src/app/utils/path';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PhotoRes } from './entity/res/photoRes';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = Path.ROOT_URL;
  constructor(private http: HttpClient) { }

  getListPhoto():Observable<PhotoRes[]>{
    return this.http.get<PhotoRes[]>(this.url+'/photos').
    pipe(catchError(this.errorHandler));
  }

  getListPhotoByAlbum(idAlbum : any): Observable<PhotoRes[]>{
    let param = new HttpParams();
    param = param.append('albumId',idAlbum);
    return this.http.get<PhotoRes[]>(this.url+'/photos', {params :param}).
    pipe(catchError(this.errorHandler));
  }

  getPhotoById(id :number):Observable<PhotoRes>{
    let header = new HttpHeaders();
    header = header.append('Content-Type','text/html; charset=utf-8');
    header = header.append('Access-Control-Allow-Methods','*');
    header = header.append('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    return this.http.get<PhotoRes>(this.url+'/photos'+'/'+id, {headers :header}).
    pipe(catchError(this.errorHandler));
  }

  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
