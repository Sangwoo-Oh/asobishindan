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
      preference :  new FormArray([
        //new FormControl('', Validators.required)
      ])
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
    //console.log(new_array);
  }
  public submit() {
    this.testService.saveEssencePreferences(this.form.value.preference)
    this.router.navigate(['/test/non-essence'])
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
      let index = preferenceFormArray.controls.findIndex(x => x.value == pref_label)
      preferenceFormArray.removeAt(index);
    }
  }
}
