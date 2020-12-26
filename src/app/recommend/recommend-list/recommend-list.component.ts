import { Component, OnInit } from '@angular/core';
import { RecommendService } from "../recommend.service";
import { TestService } from "../../test/test.service";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.css']
})
export class RecommendListComponent implements OnInit {
  activity: any;
  cor_pref1: number;
  cor_pref2: number;
  cor_pref3: number;
  sub_pref_string: Array<number>;
  sub_pref: Array<number>;
  param: any;
  data: any;
  prefs: any;
  actinfos: any;
  corPref: any;
  subPref: any;
  params: any;
  err: any;

  constructor(
    private recommendService: RecommendService,
    private testService: TestService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.err = new Array();
    this.activity = new Array();
    this.cor_pref1 = 0
    this.cor_pref2 = 0
    this.cor_pref3 = 0
    this.sub_pref_string = new Array();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.cor_pref1 = params['cor_pref1'];
      this.cor_pref2 = params['cor_pref2'];
      this.cor_pref3 = params['cor_pref3'];
      this.sub_pref_string = params['sub_pref'];
    })
    this.sub_pref = new Array();
    /*
    for (let index = 0; index < this.sub_pref_string.length; index++) {
      const element = this.sub_pref_string[index];
      this.sub_pref[index] = Math.floor(element);
    }
    */
    this.data = new Array();
    this.prefs = new Array();
    this.actinfos = new Array();
    // TODO: サンプルデータ
    /*
    this.params = new Array(
        {
          "cor_pref1": 2,
          "cor_pref2": 5,
          "cor_pref3": 13,
          "sub_prefs" : [
            1,
            3,
            4,
            11
          ]
        }
    );
    */
    this.params = this.testService.getParams();
  }

  ngOnInit(): void {
    //二つの配列から共通している要素を取り出す関数
    const getArraysIntersect = (array01: any, array02: any) => {
      return [...new Set(array01)].filter(value => array02.includes(value));
    }

    //this.recommendService.getActivity(this.cor_pref1, this.cor_pref2, this.cor_pref3).subscribe(
    this.recommendService.getActivity(this.params).subscribe(
      response =>  {
        this.data = response;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          if (index % 2 == 0) {
            element['act_main_img'] = 'recommend_bg_01';
          } else {
            element['act_main_img'] = 'recommend_bg_02';
          }
        }
        this.activity.push(this.data);
      },
      err => {
        // alert('システムエラーです。最初から診断をやり直してください');
        this.err.push('エラー: 最初から診断をやり直してください');
      }
    )
  }

  onClick(data: any) {
    this.recommendService.setData(data);
  }
  ngDoCheck() {
  }

}
