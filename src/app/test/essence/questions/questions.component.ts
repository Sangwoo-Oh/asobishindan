import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// モーダルダイアログとして表示するコンポーネント
import { ModalComponent } from '../modal/modal.component';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../service/modal.service';
import { EpisodeCat } from "./episode-cat";
import { TestService } from '../../test.service';
import { Router } from '@angular/router';
import { ResponseModel } from '../../../model/response.model';


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
  addItem(newItem: any) {
    this.items = 0;
    if (newItem.param == 1) {
      newItem.data.episode.forEach((element: any) => {
          this.items_ph[this.index_ph] = element
          this.index_ph++
      });
    } else if (newItem.param == 2) {
      newItem.data.episode.forEach((element: any) => {
          this.items_cl[this.index_cl] = element
          this.index_cl++
      });
    } else if (newItem.param == 3) {
      newItem.data.episode.forEach((element: any) => {
          this.items_ac[this.index_ac] = element
          this.index_ac++
      });
    } else if (newItem.param == 4) {
      newItem.data.episode.forEach((element: any) => {
          this.items_sc[this.index_sc] = element
          this.index_sc++
      });
    } else if (newItem.param == 5) {
      newItem.data.episode.forEach((element: any) => {
          this.items_bz[this.index_bz] = element
          this.index_bz++
      });
    }
    this.items = this.items_ph.length + this.items_cl.length + this.items_ac.length + this.items_sc.length + this.items_bz.length;
    if (this.items > 3) {

    }
    console.log(this.items)
    this.flag = false;
  }

  // モーダルダイアログが閉じた際のイベントをキャッチするための subscription
  private subscription: Subscription = new Subscription();

  // ngComponentOutlet にセットするためのプロパティ
  public modal: any = null;
  public modalData: any = null;

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


  constructor(
    private testService: TestService,
    private modalService: ModalService,
    private router: Router) {
    this.data = new Array()
  }

  ngOnInit() {
    // モーダルダイアログを閉じた際のイベントを処理する
    this.subscription = this.modalService.closeEventObservable$.subscribe(
      () => {
        // プロパティ modal に null をセットすることでコンポーネントを破棄する
        // このタイミングで ModalComponent では ngOnDestroy が走る
        this.modal = null;
      }
    );
  }

  /**
   * 終了処理
   *
   * @memberof AppComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof AppComponent
   */
  public onClick(event: any) {
    this.setModal();
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

  /**
   * モーダルダイアログを表示する
   *
   * @private
   * @memberof AppComponent
   */
  private setModal() {
    this.modal = ModalComponent;
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
}
