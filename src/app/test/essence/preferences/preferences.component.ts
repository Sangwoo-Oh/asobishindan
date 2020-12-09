import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  selectedEpisode: any[];
  data: any;

  constructor(
    private testService: TestService
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
}
