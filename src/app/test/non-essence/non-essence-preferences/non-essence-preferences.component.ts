import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../../test.service';
import { AllPreferenceModel } from '../../../model/all-preference.model';

@Component({
  selector: 'app-non-essence-preferences',
  templateUrl: './non-essence-preferences.component.html',
  styleUrls: ['./non-essence-preferences.component.css']
})
export class NonEssencePreferencesComponent implements OnInit {
  data: any;
  datas: any;
  form: FormGroup;
  prefArray: any;
  episodes: any;
  i: Array<number>;

  constructor(
    private testService: TestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.testService.getAllPreferences().subscribe(
      response => {
        this.data = response;
        this.datas = new Array();
        this.data.forEach((item: any) => {
          this.datas.push(
            {
              id: item['id'],
              pref_label: item['pref_label']
            }
          )
        });
      },
      err => alert(err)
    );
    this.episodes = this.testService.getnonessenceEpis();
    this.form = this.formBuilder.group({
      preference1 :  new FormArray([
      ], Validators.required)
    });
    if (this.episodes.length == 1) {
      this.form = this.formBuilder.group({
        preference1 :  new FormArray([
        ], Validators.required)
      });
    } else if (this.episodes.length == 2) {
      this.form = this.formBuilder.group({
        preference1 :  new FormArray([
        ], Validators.required),
        preference2 :  new FormArray([
        ], Validators.required)
      });
    } else if (this.episodes.length == 3) {
      this.form = this.formBuilder.group({
        preference1 :  new FormArray([
        ], Validators.required),
        preference2 :  new FormArray([
        ], Validators.required),
        preference3 :  new FormArray([
        ], Validators.required),
      });
    }
    this.i = new Array(1,2,3);
  }

  ngOnInit(): void {
  }

  onChange1(pref_label: string, pref_id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray1 = <FormArray>this.form.controls.preference1;
    if (isChecked) {
      preferenceFormArray1.push(new FormControl(
        {
          label: pref_label,
          id: pref_id
        }
      ));
    } else {
      let index = preferenceFormArray1.controls.findIndex(x => x.value == pref_id)
      preferenceFormArray1.removeAt(index);
    }
  }
  onChange2(pref_label: string, pref_id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray2 = <FormArray>this.form.controls.preference2;
    if (isChecked) {
      preferenceFormArray2.push(new FormControl(
        {
          label: pref_label,
          id: pref_id
        }
      ));
    } else {
      let index = preferenceFormArray2.controls.findIndex(x => x.value == pref_id)
      preferenceFormArray2.removeAt(index);
    }
  }
  onChange3(pref_label: string, pref_id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray3 = <FormArray>this.form.controls.preference3;
    if (isChecked) {
      preferenceFormArray3.push(new FormControl(
        {
          label: pref_label,
          id: pref_id
        }
      ));
    } else {
      let index = preferenceFormArray3.controls.findIndex(x => x.value == pref_id)
      preferenceFormArray3.removeAt(index);
    }
  }

  onSubmit() {
    let prefArray = this.form.value.preference1
    if (this.form.value.preference2) {
      let prefArray = this.form.value.preference1.concat(this.form.value.preference2)
    } else if (this.form.value.preference3) {
      let prefArray = this.form.value.preference1.concat(this.form.value.preference2, this.form.value.preference3)
    }
    console.log(prefArray)
    this.testService.saveNonEssencePreferences(prefArray)
    this.router.navigate(
      ['/test/result']/*,
      {
        queryParams: {
          id: [
            this.form.value['preference']
          ]
        }
      }*/
    );
  }
}
