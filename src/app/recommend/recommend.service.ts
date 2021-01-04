import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { RecommendModel } from './model/recommend.model';
import { PreferenceModel } from './model/preference.model';
import { ActInfoModel } from './model/actinfo.model';




const URL_PROD = 'https://agile-basin-62653.herokuapp.com';
const URL_TEST = 'http://127.0.0.1:8000';

@Injectable({ providedIn: 'root' })
export class RecommendService {
  data: any;
  prefs: any;
  actinfos: any;
  resultId: any;
  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * 結果に基づいてアクティビティデータを取得
   */
   /*
  public getActivity(cor_pref1: number, cor_pref2: number, cor_pref3: number): Observable<RecommendModel> {
    return this.http.get<RecommendModel>(URL_PROD + '/api/getPrefAct?cor_pref1=' + cor_pref1 + '&cor_pref2=' + cor_pref2 + '&cor_pref3=' + cor_pref3)
  }
  */
  public getActivity(params: any): Observable<RecommendModel> {
    return this.http.post<RecommendModel>(URL_PROD + '/api/getPrefAct', params)
  }
  public setData(data: any) {
    this.data = data
  }
  public getData():any{
    return this.data;
  }
  /**
   * アクティビティIDから嗜好性を取得
   */
  public getPrefFromAct(id: number): Observable<PreferenceModel> {
    return this.http.get<PreferenceModel>(URL_PROD + '/api/getActPref/' + id)
  }
  public setPrefsData(prefs: any) {
    this.prefs = prefs
  }
  public getPrefsData():any{
    return this.prefs;
  }
  /**
   * アクティビティIDからアクティビティ情報を取得
  **/
  public getActInfo(id: number): Observable<ActInfoModel> {
    return this.http.get<ActInfoModel>(URL_PROD + '/api/getActInfo/' + id)
  }
  public setActInfoData(actinfos: any) {
    this.actinfos = actinfos
  }
  public getActInfoData():any{
    return this.actinfos;
  }

  /**
   * 診断結果を取得
  **/
  public getResult(id: any): Observable<any> {
    return this.http.get<any>(URL_PROD + '/api/result/' + id);
  }
  public setResultId(id: any){
    this.resultId = id;
  }
  public getResultId(): any {
    return this.resultId;
  }
}
