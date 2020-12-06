import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-preference-list',
  templateUrl: './preference-list.component.html'
})
export class PreferenceListComponent implements OnInit {
  data: any;
  prefId: any;


  constructor(
    public testService: TestService
  ) {
    this.data = new Array();
  }

  ngOnInit() {
    this.prefId = this.testService.getPrefId();
    this.onSubmit(this.prefId);
  }
  public onSubmit(id: string):any{
    this.testService.getEpiPreferences(id).subscribe(
      response =>  {
        /*
        this.data.push(response),
        this.data.forEach(response => this.data = JSON.parse(JSON.stringify(response)));
        this.testService.setData(this.data);
        this.json = response;
        */
        this.data = response;
        this.testService.setEpiArrayData(this.data);
        return this.data;
      },
      err => alert(err)
    );
  }
}
