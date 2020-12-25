import { Component, OnInit } from '@angular/core';
import { RecommendService } from "../recommend.service";
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

  constructor(
    private recommendService: RecommendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activity = new Array();
    this.cor_pref1 = 0
    this.cor_pref2 = 0
    this.cor_pref3 = 0
    this.sub_pref_string = new Array();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.cor_pref1 = params['cor_pref1'];
      this.cor_pref2 = params['cor_pref2'];
      this.cor_pref3 = params['cor_pref3'];
      this.sub_pref_string = params['subPref'];
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
  }

  ngOnInit(): void {
    //二つの配列から共通している要素を取り出す関数
    const getArraysIntersect = (array01: any, array02: any) => {
      return [...new Set(array01)].filter(value => array02.includes(value));
    }

    this.recommendService.getActivity(this.cor_pref1, this.cor_pref2, this.cor_pref3).subscribe(
      response =>  {
        this.data = response;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.data[index].act_main_img = 'recommend_bg_01';
          //アクティビティごとに割り当てられた嗜好性を取得
          this.recommendService.getPrefFromAct(this.data[index].act_id).subscribe(
            response => {
              this.recommendService.setPrefsData(response);
              // this.data[index].preferences = this.recommendService.getPrefsData();
              let pref = [];
              for (let index = 0; index < this.recommendService.getPrefsData().length; index++) {
                const element = this.recommendService.getPrefsData()[index];
                pref[index] = element['id'];
              }
              //サブ嗜好性の内マッチしている嗜好性を抽出
              this.data[index].act_point = this.data[index].act_point + (getArraysIntersect(pref, this.sub_pref).length) * 2;
              this.data[index].preferences = response;
              //this.recommendService.setData(this.data);
              //this.activity.push(this.recommendService.getData());
            },
            err => alert(err)
          )
          //アクティビティごとのアクティビティ情報を取得
          this.recommendService.getActInfo(this.data[index].act_id).subscribe(
            response => {
              // this.recommendService.setActInfoData(response);
              // this.data[index].actinfos = this.recommendService.getActInfoData();
              this.data[index].actinfos = response;
              this.recommendService.setData(this.data);
              this.activity.push(this.recommendService.getData());
            },
            err => alert(err)
          )
        }
      },
      err => alert(err)
    )
  }

  onClick(data: any) {
    this.recommendService.setData(data);
  }
  ngDoCheck() {
  }

}
