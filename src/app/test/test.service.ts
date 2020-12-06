import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResponseModel } from '../model/response.model';
import { PreferenceModel } from '../model/preference.model';

const URL_PROD = 'https://agile-basin-62653.herokuapp.com';
const URL_TEST = 'http://127.0.0.1:8000';


@Injectable({ providedIn: 'root' })
export class TestService {
  data: any
  pref: string

  constructor(private http: HttpClient) {
    this.pref = ""
  }

  /**
   * エピソード情報取得
   */
  public getEpisode(id: string): Observable<ResponseModel>{

    /*return this.http.get<ResponseModel>('http://127.0.0.1:8000/api/ver/', { params: new HttpParams().set('zipcode', zipCode) })*/
    return this.http.get<ResponseModel>(URL_TEST + '/api/episode/' + id)
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

  /**
   * エピソードから嗜好性取得
   */
  public setEpiArrayData(data: any) {
    this.data = data;
  }
  public getEpiArrayData():any{
    return this.data;
  }
  public getEpiPreferences(id: string): Observable<PreferenceModel>{
    return this.http.get<PreferenceModel>(URL_TEST + '/api/preferences/' + id)
  }
  /**
   * 親要素(PreferencesComponent)から子要素(PreferenceListComponent)へのデータ受け渡し
   */
   public setPrefId(id: string) {
     this.pref = id;
   }
   public getPrefId():string {
     return this.pref;
   }
}
