import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { PreferenceListComponent } from "./preference-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  selectedEpisode: any[];
  data: any[];
  preferences: any[];
  index: number;
  form: FormGroup;

  constructor(
    private testService: TestService,
    private preferenceListComponent: PreferenceListComponent,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.selectedEpisode = new Array();
    this.data = new Array();
    this.preferences = new Array();
    this.index = 0;
    this.selectedEpisode = this.testService.getEpiArrayData();
    this.selectedEpisode.forEach(element => {
      this.onSubmit(element['id']);
    });
    this.form = this.formBuilder.group({
      preference1 :  new FormArray([
        // new FormArray([], Validators.required)
      ], Validators.required),
      preference2 :  new FormArray([
        // new FormArray([], Validators.required)
      ], Validators.required),
      preference3 :  new FormArray([
        // new FormArray([], Validators.required)
      ], Validators.required)
    });
  }

  ngOnInit(): void {
  }
  public toChild(id: any):any{
    this.testService.setPrefId(id)
  }
  public getArray():any {
    // let pref_array = this.testService.getPrefData();
    // this.changeArray(pref_array);
    // this.preferenceListComponent.setData();
  }

  public changeArray(array: any[]) {
    let new_array = new Array();
    array.forEach((element1: any) => {
      element1.forEach((element2: any) => {
        new_array.push(
          {
            id: element2['id'],
            pref_label: element2['pref_label']
          }
        )
      });
    });
  }
  public submit() {
    let prefArray = this.form.value.preference1.concat(this.form.value.preference2, this.form.value.preference3);
    this.testService.saveEssencePreferences(prefArray);
    this.router.navigate(['/test/non-essence']);
  }

  public onSubmit(id: string):any{
    this.testService.getEpiPreferences(id).subscribe(
      response =>  {
        this.data.push(response);
        this.testService.setEpiArrayData(this.data);
        return this.data;
      },
      err => alert(err)
    );
  }

  onChange1(pref_label: string, id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preference1FormArray = <FormArray>this.form.controls.preference1;
    if (isChecked) {
      preference1FormArray.push(new FormControl(
        {
          label: pref_label,
          id: id
        }
      ));

    } else {
      let index = preference1FormArray.controls.findIndex(x => x.value == pref_label)
      preference1FormArray.removeAt(index);
    }
  }
  onChange2(pref_label: string, id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preference2FormArray = <FormArray>this.form.controls.preference2;
    if (isChecked) {
      preference2FormArray.push(new FormControl(
        {
          label: pref_label,
          id: id
        }
      ));

    } else {
      let index = preference2FormArray.controls.findIndex(x => x.value == pref_label)
      preference2FormArray.removeAt(index);
    }
  }
  onChange3(pref_label: string, id: number, event: any) {
    let isChecked = <HTMLInputElement>event.target.checked;
    const preference3FormArray = <FormArray>this.form.controls.preference3;
    if (isChecked) {
      preference3FormArray.push(new FormControl(
        {
          label: pref_label,
          id: id
        }
      ));

    } else {
      let index = preference3FormArray.controls.findIndex(x => x.value == pref_label)
      preference3FormArray.removeAt(index);
    }
  }
}
