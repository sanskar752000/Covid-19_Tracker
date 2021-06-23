import { GlobalDataSummary } from './../models/global-data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data: GlobalDataSummary[] = [];

  globalDataUrl = "https://api.covid19api.com/summary";
  constructor(private http: HttpClient) { }

  getGlobalData(): Observable<any>{
    return this.http.get(this.globalDataUrl).pipe(
      map((result: any) => {
        let objs = result.Countries;
        // console.log(result.Countries);

        objs.forEach((obj: any) => {
          this.data.push({
            country: obj.Country,
            totalConfirmed: obj.TotalConfirmed,
            totalDeaths: obj.TotalDeaths,
            totalRecovered: obj.TotalRecovered,
            newConfirmed: obj.NewConfirmed
          })
        });
        return this.data;
      })
    );
  }

  getTotalGlobalData(): Observable<any> {
    return this.http.get(this.globalDataUrl).pipe(
      map((result: any) => {
        return result.Global;
      })
    );
  }
}
