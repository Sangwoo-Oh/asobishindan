import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  prefs: any;
  essencePrefs: any;
  nonessencePrefs: any;
  allPrefs: any;
  form: FormGroup;
  checked: boolean;


  constructor(
    private testService: TestService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.essencePrefs  = this.testService.getEssencePreferences();
    this.nonessencePrefs = this.testService.getNonEssencePreferences();
    this.prefs = new Array();
    this.allPrefs = new Array();
    this.prefs.push(this.essencePrefs);
    this.prefs.push(this.nonessencePrefs);
    this.form = this.formBuilder.group({
      preference :  new FormArray([
        // new FormControl('',Validators.required)
      ])
    });
    this.checked = false;
  }

  ngOnInit(): void {
    this.changeArray(this.prefs)
  }

  public changeArray(array: any[]) {
    let new_array = new Array();
    array.forEach((element1: any) => {
      element1.forEach((element2: any) => {
        new_array.push(
          {
            id: element2['id'],
            pref_label: element2['label']
          }
        )
      });
    });
    console.log(new_array)
    this.checkDuplicate(new_array);
  }

  /**
   * 配列内の重複チェック
   */
  public checkDuplicate(array: any[]) {
    const count = new Array();
    const output = new Array();
    for (let index = 0; index < array.length; index++) {
      const element = array[index]['id'];
      if (count[element]) {
        count[element] = count[element] + 1;
        output[element] = {
          id: array[index]['id'],
          pref_label: array[index]['pref_label'],
          count: count[element]
        }
      } else {
        count[element] = 1
        output[element] = {
          id: array[index]['id'],
          pref_label: array[index]['pref_label'],
          count: 1
        }
      }
      //count[element] = (count[element] || 0) + 1;
    }
    console.log(output)
    //nullを除去
    let i = 0;
    output.forEach(element => {
      if (element !== null) {
        this.allPrefs[i] = element;
        i++;
      }
    });
    console.log(this.allPrefs)
  }
  onChange(pref_label: string, id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preferenceFormArray = <FormArray>this.form.controls.preference;
    if (isChecked) {
      preferenceFormArray.push(new FormControl(
        {
          label: pref_label,
          id: id
        }
      ));
    } else {
      let index = preferenceFormArray.controls.findIndex(x => x.value == id)
      preferenceFormArray.removeAt(index);
    }
  }
  reset() {
    this.form.value.preference.length = 0;
  }
  next() {
    this.router.navigate(
      ['/recommend'],
      {
        queryParams: {
          cor_pref1: this.form.value.preference[0].id,
          cor_pref2: this.form.value.preference[1].id,
          cor_pref3: this.form.value.preference[2].id,
        }
      }
    )

  }

}