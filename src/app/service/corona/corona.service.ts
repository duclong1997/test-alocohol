import { Injectable } from '@angular/core';
import { Path } from 'src/app/utils/path';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CoronaVietNameRes } from './entity/res/CoronaVietNameRes';
import { CoronaVietNameReq } from './entity/req/coronaVietNameReq';
import { catchError } from 'rxjs/operators'
import { CoronaInfo } from './entity/res/coronaInfo';
import { encode, decode } from 'punycode';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  private ROOT_URL = Path.ROOT_URL_CORONA_KOMPA;
  private ROOT_URL_GISANDDATA = Path.ROOT_URL_CORONA_GISANDATA;
  private ROOT_URL_CORONA_INFO = Path.ROOT_URL_CORONA_INFO;
  private ROOT_URL_CORONA_COUNTRY =Path.ROOT_URL_CORONA_COUNTRY;
  private ROOT_URL_CORONA_STATISTIC = Path.ROOT_URL_CORONA_STATISTIC;
  private ROOT_URL_CORONA_FEATURE_4 =Path.ROOT_URL_CORONA_FEATURE_SERVER_4;

  constructor(private http: HttpClient) { }

  getCoronaVietName(): Observable<CoronaVietNameRes>{
    let req = new CoronaVietNameReq();
    req.operationName = 'provinces';
    req.variables = new Object();
    req.query = 'query provinces {  provinces {\n    Province_Name\n    Province_Id\n    Lat\n    Long\n    Confirmed\n    Deaths\n    Recovered\n    Last_Update\n    __typename\n  }\n}\n';

    let headers = new HttpHeaders();
    headers = headers.append('authority','corona-api.kompa.ai');
    headers = headers.append('accept','*/*');
    headers = headers.append('content-type','application/json');
    headers = headers.append('accept-language','en-US,en;q=0.9');
    headers = headers.append('origin','https://corona.kompa.ai');
    headers = headers.append( 'Access-Control-Allow-Credentials', 'true');
    headers = headers.append( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers = headers.append( 'Access-Control-Allow-Headers', 'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type');
    headers = headers.append('Access-Control-Allow-Origin', '*');

    return this.http.post<CoronaVietNameRes>(this.ROOT_URL, req, {headers :headers})
    .pipe(catchError(this.errorHandler));
  }

  getCoronaPortals():Observable<any>{
    let params = new HttpParams();
    params = params.append('culture','en-us');
    params = params.append('f','json');
    return this.http.get<any>(this.ROOT_URL_GISANDDATA+'/portals/self', {params : params})
    .pipe(catchError(this.errorHandler));
  }

  getInfoCorona(offset : any, limit : any):Observable<CoronaInfo>{
    let params = new HttpParams();
    params = params.append('f', 'json');
    params = params.append('where', decodeURI('Confirmed%20%3E%200'));
    params = params.append('returnGeometry', 'false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outFields','*');
    params = params.append('orderByFields', decodeURI('Last_Update%20desc'));
    params = params.append('resultOffset',offset);
    params = params.append('resultRecordCount',limit);

    let header = new HttpHeaders();
    header = header.append('referer', 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html');
    header = header.append('accept-language','en-US,en;q=0.9');
    
    // list contry, province, confirmed, recovered, death, active of corona
    return this.http.get<CoronaInfo>(this.ROOT_URL_CORONA_INFO, {params: params, headers: header}).
    pipe(catchError(this.errorHandler));
  }

  // total deaths, recovered, confirmed of corona
  getTotal(): Observable<any>{
    let params = new HttpParams();
    params = params.append('f','json');
    params = params.append('where','Confirmed > 0');
    params = params.append('returnGeometry','false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outStatistics','[{"statisticType":"sum","onStatisticField":"Deaths","outStatisticFieldName":"deaths"},{"statisticType":"sum","onStatisticField":"Confirmed","outStatisticFieldName":"confirmed"},{"statisticType":"sum","onStatisticField":"Recovered","outStatisticFieldName":"recovered"}]');

    return this.http.get<any>(this.ROOT_URL_CORONA_INFO, {params : params}).
    pipe(catchError(this.errorHandler));
  }

  // all country confirmed of corona in the world
  getAllCountryCorona():Observable<any>{
    let params = new HttpParams();
    params = params.append('f','json');
    params = params.append('where','Confirmed > 0');
    params = params.append('returnGeometry','false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outFields','*');
    params = params.append('orderByFields','Confirmed desc');
    params = params.append('resultOffset','0');
    params =params.append('resultRecordCount','200');
    return this.http.get<any>(this.ROOT_URL_CORONA_COUNTRY,{params:params}).
    pipe(catchError(this.errorHandler));
  }

  // get info corona of country
  getCoronaByCountry(country :any):Observable<any>{
    let params = new HttpParams();
    params = params.append('f','json');
    params = params.append('where','(Country_Region=\''+country+'\')');
    params = params.append('returnGeometry','false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outFields','*');
    params = params.append('orderByFields','Recovered desc,Country_Region asc,Province_State asc');
    params = params.append('outSR','102100');
    params = params.append('resultOffset', '0');
    params = params.append('resultRecordCount','250');
    return this.http.get<any>(this.ROOT_URL_CORONA_INFO, {params: params}).
    pipe(catchError(this.errorHandler));
  }

  // get info corona of country
  getCoronaByObjectId(objectId :any):Observable<any>{
    let params = new HttpParams();
    params = params.append('f','json');
    params = params.append('where','OBJECTID='+objectId);
    params = params.append('returnGeometry','false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outFields','*');
    params = params.append('orderByFields','Recovered desc,Country_Region asc,Province_State asc');
    params = params.append('outSR','102100');
    params = params.append('resultOffset', '0');
    params = params.append('resultRecordCount','250');
    return this.http.get<any>(this.ROOT_URL_CORONA_INFO, {params: params}).
    pipe(catchError(this.errorHandler));
  }

  // get statistic of corona
  getStatisticCorona():Observable<any>{
    let params = new HttpParams();
    params = params.append('f','json');
    params = params.append('where','1=1');
    params = params.append('returnGeometry','false');
    params = params.append('spatialRel','esriSpatialRelIntersects');
    params = params.append('outFields','*');
    params = params.append('orderByFields','Report_Date_String asc');
    params = params.append('outSR','102100');
    params = params.append('resultOffset','0');
    params = params.append('resultRecordCount','1000');
    return this.http.get<any>(this.ROOT_URL_CORONA_STATISTIC,{params: params}).
    pipe(catchError(this.errorHandler));
  }

  // confirmed last update
  getConfirmedLastTime(countryRegion : any): Observable<any>{
    let params = new HttpParams();
    params = params.append("f","json");
    let option = '(Confirmed<>0)';
    // check country
    if(countryRegion != ''){
      option = option + " AND (Country_Region='"+countryRegion+"')";
    }
    params = params.append("where", option);
    params = params.append("returnGeometry", "false");
    params = params.append("spatialRel","esriSpatialRelIntersects");
    params = params.append("outFields","OBJECTID,Confirmed,Last_Update");
    params = params.append("orderByFields","Last_Update asc");
    params = params.append("outSR","102100");
    params = params.append("resultOffset","0");
    params = params.append("resultRecordCount","10000");

    let header = new HttpHeaders();
    header = header.append("referer","https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html");
    header = header.append("accept-language","en-US,en;q=0.9");

    return this.http.get<any>(this.ROOT_URL_CORONA_FEATURE_4, {params: params, headers: header})
    .pipe(catchError(this.errorHandler));
  }

  // delta confirmed
  geteDeltaConfirmedLastUpdated(countryRegion :any){
    let param = new HttpParams();
    param = param.append("f","json");
    let opption = "1=1";
    // check cnoutry region
    if(countryRegion != ''){
      opption += " and Country_Region='"+countryRegion+"'";
    }
    param = param.append("where", opption);
    param = param.append("returnGeometry","false");
    param = param.append("spatialRel","esriSpatialRelIntersects");
    param = param.append("outFields","OBJECTID,Delta_Confirmed,Last_Update");
    param = param.append("orderByFields","Last_Update asc");
    param = param.append("outSR","102100");
    param = param.append("resultOffset","0");
    param = param.append("resultRecordCount","10000");

    let header = new HttpHeaders();
    header = header.append("referer","https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html");
    header = header.append("accept-language","en-US,en;q=0.9");

    return this.http.get<any>(this.ROOT_URL_CORONA_FEATURE_4, {params: param, headers : header}).
    pipe(catchError(this.errorHandler));
  }
  
  // error handler
  errorHandler(error : HttpErrorResponse | any){
    return throwError(error.message || "server error.");
  }
}
