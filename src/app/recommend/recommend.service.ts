import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

const URL_PROD = 'https://agile-basin-62653.herokuapp.com';
const URL_TEST = 'http://127.0.0.1:8000';

@Injectable({ providedIn: 'root' })
export class RecommendService {
  data: any;

  constructor(
    private http: HttpClient
  ) {
  }
  public setData(data: any) {
    this.data = data

  }
  public getData():any{
    return this.data;
  }
}
