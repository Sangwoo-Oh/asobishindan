import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html'
})
export class PreferenceListComponent implements OnInit {
  data: any;
  prefId: any;
  preferenceArrays: any[];


  constructor(
    public testService: TestService
  ) {
    this.data = new Array();
    this.preferenceArrays = new Array();
  }

  ngOnInit() {
    this.prefId = this.testService.getPrefId();
    this.onSubmit(this.prefId);
  }
  public onSubmit(id: string):any{
    this.testService.getEpiPreferences(id).subscribe(
      response =>  {
        this.data = response;
        this.testService.setEpiArrayData(this.data);
        return this.data;
      },
      err => alert(err)
    );
  }
  public changed() {
    this.preferenceArrays = new Array();
    this.data.forEach(item => {
      if (item['checked']) {
        this.preferenceArrays.push(
          {
            id: item['id'],
            pref_label: item['pref_label'],
          }
        );
      }
    })
    this.testService.setPrefData(this.preferenceArrays);
    this.testService.getPrefData();
  }
}
