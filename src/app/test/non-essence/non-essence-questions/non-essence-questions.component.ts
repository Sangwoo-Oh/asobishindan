import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-non-essence-questions',
  templateUrl: './non-essence-questions.component.html',
  styleUrls: ['./non-essence-questions.component.css']
})
export class NonEssenceQuestionsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      options: this.formBuilder.array([
        {
          group: '',
          asobi: ''
        }
      ])
    });
  }

  ngOnInit(): void {
    this.initForm();
    this.options.push(this.optionForm);
  }

  initForm() {
    this.form = this.formBuilder.group({
      options: this.formBuilder.array([])
    });
  }
  get optionForm(): FormGroup {
    return this.formBuilder.group({
      group: [''],
      asobi: ['']
    });
  }
  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }
  // 追加ボタンがクリックされたときに実行する関数です。
  // pushとすることで既存のフォームにオプション用のフォームを追加します。
  addOptionForm() {
    this.options.push(this.optionForm);
  }

  // removeAtでインデックスを指定することで、FormArrayのフォームを削除します。
  removeOptionForm(idx: number) {
    this.options.removeAt(idx);
  }
}
