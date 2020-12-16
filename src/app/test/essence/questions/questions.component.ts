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

  // モーダルダイアログが閉じた際のイベントをキャッチするための subscription
  private subscription: Subscription = new Subscription();

  // ngComponentOutlet にセットするためのプロパティ
  public modal: any = null;

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
