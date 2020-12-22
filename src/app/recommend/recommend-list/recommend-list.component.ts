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
  param: any;
  data: any;
  prefs: any;
  actinfos: any;

  constructor(
    private recommendService: RecommendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activity = new Array();
    this.cor_pref1 = 0
    this.cor_pref2 = 0
    this.cor_pref3 = 0
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.cor_pref1 = params['cor_pref1'];
      this.cor_pref2 = params['cor_pref2'];
      this.cor_pref3 = params['cor_pref3'];
    })
    this.data = new Array();
    this.prefs = new Array();
    this.actinfos = new Array();
  }

  ngOnInit(): void {
    this.recommendService.getActivity(this.cor_pref1, this.cor_pref2, this.cor_pref3).subscribe(
      response =>  {
        this.data = response;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.data[index].act_main_img = 'recommend_bg_01';
          this.recommendService.getPrefFromAct(this.data[index].act_id).subscribe(
            response => {
              this.recommendService.setPrefsData(response);
              this.data[index].preferences = this.recommendService.getPrefsData();
              this.recommendService.setData(this.data);
              this.activity.push(this.recommendService.getData());
            },
            err => alert(err)
          )
          this.recommendService.getActInfo(this.data[index].act_id).subscribe(
            response => {
              this.recommendService.setActInfoData(response);
              this.data[index].actinfos = this.recommendService.getActInfoData();
              this.recommendService.setData(this.data);
              this.activity.push(this.recommendService.getData());
              console.log(this.activity)
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

}
