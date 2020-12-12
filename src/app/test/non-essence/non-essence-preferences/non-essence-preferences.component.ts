import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
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

  constructor(
    private testService: TestService,
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
  }

  ngOnInit(): void {
  }
}
