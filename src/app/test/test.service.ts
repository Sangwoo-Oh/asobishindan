import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ResponseModel } from '../model/response.model';
import { PreferenceModel } from '../model/preference.model';
import { AllPreferenceModel } from '../model/all-preference.model';


const URL_PROD = 'https://agile-basin-62653.herokuapp.com';
const URL_TEST = 'http://127.0.0.1:8000';

@Injectable({ providedIn: 'root' })
export class TestService {
  data: any
  pref: string
  datas: any[]
  modalData: any

  constructor(
    private http: HttpClient
  ) {
    this.pref = ""
    this.datas = new Array();
    this.modalData = new Array();
  }

  /**
   * エピソード情報取得
  **/
  public getEpisode(id: string): Observable<ResponseModel>{

    /*return this.http.get<ResponseModel>('http://127.0.0.1:8000/api/ver/', { params: new HttpParams().set('zipcode', zipCode) })*/
    return this.http.get<ResponseModel>(URL_PROD + '/api/episode/' + id)
      /*
      .pipe(
        tap( response => { if(response.code != 200) throw new Error(response.message) } ),
        catchError( error => { throw new Error(error.message) } )
      );
      */
  }
  public setData(data: any) {
    this.data = data;
  }
  public getData():any{
    return this.data;
  }

  /**
   * モーダル間データやりとりサービス
  **/
  public setModalData(data: any) {
    this.modalData = data
  }
  public getModalData(): any {
    return this.modalData
  }

  /**
   * エピソードから嗜好性取得
  **/
  public setEpiArrayData(data: any) {
    this.data = data;
  }
  public getEpiArrayData():any{
    return this.data;
  }
  public getEpiPreferences(id: string): Observable<PreferenceModel>{
    return this.http.get<PreferenceModel>(URL_PROD + '/api/getPreferences/' + id)
  }
  /**
   * 親要素(PreferencesComponent)から子要素(PreferenceListComponent)へのデータ受け渡し
  **/
  public setPrefId(id: string) {
   this.pref = id;
  }
  public getPrefId():string {
   return this.pref;
  }

  /**
   * 嗜好性をgetパラメーターに渡す
  **/
  public setPrefData(data: any) {
    this.data = data;
    console.log(this.data);
  }
  public getPrefData():any{
    this.datas.push(this.data);
    console.log(this.datas);
    return this.datas;
  }

  /**
   * 嗜好性データ全取得
  **/
  public getAllPreferences(): Observable<AllPreferenceModel>{
    return this.http.get<AllPreferenceModel>(URL_PROD + '/api/preferences');
  }
}
