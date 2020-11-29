import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResponseModel } from '../model/response.model';

@Injectable({ providedIn: 'root' })
export class TestService {
  data: any;

  constructor(private http: HttpClient) {}

  //エピソード情報取得
  public getEpisode(id: string): Observable<ResponseModel>{

    /*return this.http.get<ResponseModel>('http://127.0.0.1:8000/api/ver/', { params: new HttpParams().set('zipcode', zipCode) })*/
    return this.http.get<ResponseModel>('https://agile-basin-62653.herokuapp.com/api/episode/' + id)
      /*
      .pipe(
        tap( response => { if(response.code != 200) throw new Error(response.message) } ),
        catchError( error => { throw new Error(error.message) } )
      );
      */
  }
  public setData(data: ResponseModel[]) {
    this.data = data;
  }
  public getData():any{
    return this.data;
  }

}
