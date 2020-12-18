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
    this.form = this.formBuilder.group({
      preference :  new FormArray([
        // new FormControl('',Validators.required)
      ])
    });
  }

  ngOnInit(): void {
  }

  onChange(pref_label: string, pref_id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray = <FormArray>this.form.controls.preference;
    if (isChecked) {
      preferenceFormArray.push(new FormControl(
        {
          label: pref_label,
          id: pref_id
        }
      ));
    } else {
      let index = preferenceFormArray.controls.findIndex(x => x.value == pref_id)
      preferenceFormArray.removeAt(index);
    }
  }

  onSubmit() {
    this.testService.saveNonEssencePreferences(this.form.value.preference)
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
