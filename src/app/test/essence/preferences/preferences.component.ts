import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { PreferenceListComponent } from "./preference-list.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  selectedEpisode: any[];
  data: any;

  constructor(
    private testService: TestService,
    private preferenceListComponent: PreferenceListComponent
  ) {
    this.selectedEpisode = new Array();
    this.data = new Array();
  }

  ngOnInit(): void {
    this.selectedEpisode = this.testService.getEpiArrayData();
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
    console.log("aaa");
  }
}
