import { Component, OnInit } from '@angular/core';
import { RecommendService } from "../recommend.service";
import { TestService } from "../../test/test.service";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recommend-load',
  templateUrl: './recommend-load.component.html'
})
export class RecommendLoadComponent implements OnInit {
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
  recommend_rate: any;

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
    this.data = new Array();
    this.prefs = new Array();
    this.actinfos = new Array();

    this.params = this.testService.getParams();
    // this.params = new Array(
    //   {
    //       "cor_pref1": 2,
    //       "cor_pref2": 8,
    //       "cor_pref3": 12,
    //       "sub_prefs" : [
    //           1,
    //           3,
    //           4,
    //           11
    //       ]
    //   }
    // );
    this.recommend_rate = new Array();
  }

  ngOnInit(): void {
    this.recommendService.getActivity(this.params).subscribe(
      response =>  {
        this.data = response.json_type_column;
        const resultId = response.id;
        console.log(resultId);
        console.log(response)
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          /*
          if (index % 2 == 0) {
            // element['act_main_img'] = 'recommend_bg_01';
            element['act_main_img'] = 'activity/main/act_main_img_17';
          } else {
            element['act_main_img'] = 'recommend_bg_02';
          }
          */
          //リコメンド 0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
          if (element['recommend_rate'] == 5) {
            element['rate_classname'] = 'rate5';
          } else if (element['recommend_rate'] < 5 && element['recommend_rate'] > 4.5) {
            element['rate_classname'] = 'rate4-5';
          } else if (element['recommend_rate'] <= 4.5 && element['recommend_rate'] > 4) {
            element['rate_classname'] = 'rate4';
          } else if (element['recommend_rate'] <= 4 && element['recommend_rate'] > 3.5) {
            element['rate_classname'] = 'rate3-5';
          } else if (element['recommend_rate'] <= 3.5 && element['recommend_rate'] > 3) {
            element['rate_classname'] = 'rate3';
          } else if (element['recommend_rate'] <= 3 && element['recommend_rate'] > 2.5) {
            element['rate_classname'] = 'rate2-5';
          } else if (element['recommend_rate'] <= 2.5 && element['recommend_rate'] > 2) {
            element['rate_classname'] = 'rate2';
          } else if (element['recommend_rate'] <= 2 && element['recommend_rate'] > 1.5) {
            element['rate_classname'] = 'rate1-5';
          } else if (element['recommend_rate'] <= 1.5 && element['recommend_rate'] > 1) {
            element['rate_classname'] = 'rate1';
          } else if (element['recommend_rate'] <= 1 && element['recommend_rate'] > 0.5) {
            element['rate_classname'] = 'rate0';
          } else {
            element['rate_classname'] = 'rate0';
          }
        }
        this.activity.push(this.data);
        if (response) {
          this.router.navigate(['/recommend'], { queryParams: { id: resultId } });
        }
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
