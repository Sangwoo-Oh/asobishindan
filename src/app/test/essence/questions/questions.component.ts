import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
// モーダルダイアログとして表示するコンポーネント
import { ModalComponent } from '../modal/modal.component';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../service/modal.service';
import { EpisodeCat } from "./episode-cat";
import { TestService } from '../../test.service';
import { Router } from '@angular/router';
import { ResponseModel } from '../../../model/response.model';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit, OnDestroy {
  items: number = 0;
  items_ph: string[] = new Array();
  items_cl: string[] = new Array();
  items_ac: string[] = new Array();
  items_sc: string[] = new Array();
  items_bz: string[] = new Array();


  flag = false;
  index_ph = 0;
  index_cl = 0;
  index_ac = 0;
  index_sc = 0;
  index_bz = 0;

  episodeCats:EpisodeCat[] = [
    {
      id: 1,
      label: '体育会系部活・サークル'
    },
    {
      id: 2,
      label: '文化系部活・サークル'
    },
    {
      id: 3,
      label: '学業関連（研究・留学など）'
    },
    {
      id: 4,
      label: 'ソーシャル系課外活動'
    },
    {
      id: 5,
      label: 'ビジネス系課外活動'
    }
  ]
  data: any;
  subscription = new Subscription();
  episodes: any;
  i: number;
  opened: string[];
  public form: FormGroup;


  constructor(
    private testService: TestService,
    private modalService: ModalService,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.data = new Array()
    this.episodes = new Array()
    this.i = 0;
    this.episodeCats.forEach(element => {
      this.getEpi(element['id'])
    });
    this.subscription = this.testService.data.subscribe((data: any) => {
      this.episodes.push(data);
    });
    this.opened = new Array(
      "closed",
      "closed",
      "closed",
      "closed",
      "closed",
    )
    this.form = this.formBuilder.group({
      episode :  new FormArray([
        //new FormControl('')
      ])
    });
  }

  ngOnInit() {
  }

  /**
   * 終了処理
   *
   * @memberof AppComponent
   */
  ngOnDestroy() {
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof AppComponent
   */
  public onClick(event: any) {
    this.flag = true;
    this.router.navigate(['/test/essence'], {
      queryParams: {
        id: event.target.id
      }
    });
    this.testService.getEpisode(event.target.id).subscribe(
      response =>  {
        this.data = response;
        console.log(response);
        this.testService.setData(this.data);
      },
      err => alert(err)
    );
  }

  /*
   * 選択した活動ジャンルからエピソード取得
   */
  public onSubmit(event: any) {
    this.testService.getEpisode(event.target.id).subscribe(
      response =>  {
        this.data = response;
        this.testService.setData(this.data);
      },
      err => alert(err)
    );
    this.router.navigate(['/test/essence/episodes/'+ event.target.id]);
  }
  public getEpi(id: number) {
    this.testService.getEpisode(id).subscribe(
      response =>  {
        this.data = response;
        this.testService.setData(response);
        this.testService.getData();
      },
      err => alert(err)
    );
  }
  /*
   * アコーディオン開閉フック
   */
  addClass(i: number) {
    if (this.opened[i] == "closed") {
      this.opened[i] = "opened";
    } else if(this.opened[i] == "opened") {
      this.opened[i] = "closed";
    }
  }

  onChange(epi_label_2: string, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray = <FormArray>this.form.controls.episode;
    if (isChecked) {
      preferenceFormArray.push(new FormControl(epi_label_2));
    } else {
      let index = preferenceFormArray.controls.findIndex(x => x.value == epi_label_2)
      preferenceFormArray.removeAt(index);
    }
    if (this.form.value.episode.length >= 3) {
      this.testService.setEpiArrayData(this.form.value.episode);
      this.router.navigate(['/test/confirm']);
    }
  }
}
