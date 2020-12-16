import { Component, OnInit, OnDestroy } from '@angular/core';

// モーダルダイアログを閉じるためのイベントを管理するサービス
import { ModalService } from '../service/modal.service';

import { TestService } from '../../test.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  public datas: any[];
  public form: FormGroup;
  /**
   * コンストラクタ
   *
   * @param {ModalService} modalService
   * @memberof ModalComponent
   */
  constructor(
    private modalService: ModalService,
    private testService: TestService,
    private formBuilder: FormBuilder,
  ) {
    this.datas = new Array();
    this.form = this.formBuilder.group({
      episode :  new FormArray([
        // new FormControl('',Validators.required)
      ])
    });
  }

  /**
   * 初期処理
   *
   * @memberof ModalComponent
   */
  ngOnInit() {
    this.datas = this.testService.getData();
  }

  /**
   * 終了処理
   *
   * @memberof ModalComponent
   */
  ngOnDestroy() {
    // モーダルダイアログが閉じたタイミングで出力される
    console.log('destroyed');
  }

  /**
   * クリックイベント
   *
   * @param {*} $event イベント情報
   * @memberof ModalComponent
   */
  public onClick(event: any) {
    this.notifyCloseModal();
  }

  /**
   * モーダルダイアログを閉じる
   *
   * @private
   * @memberof ModalComponent
   */
  private notifyCloseModal() {
    this.modalService.requestCloseModal();
  }

  onChange(epi_id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray = <FormArray>this.form.controls.episode;
    if (isChecked) {
      preferenceFormArray.push(new FormControl(epi_id));
    } else {
      let index = preferenceFormArray.controls.findIndex(x => x.value == epi_id)
      preferenceFormArray.removeAt(index);
    }
  }
}
