import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  essencePrefs: any;
  nonessencePrefs: any;

  constructor(
    private testService: TestService,
  ) {
    this.essencePrefs  = this.testService.getEssencePreferences();
    this.nonessencePrefs = this.testService.getNonEssencePreferences();
  }

  ngOnInit(): void {
    console.log(this.essencePrefs)
    console.log(this.nonessencePrefs)
  }

}
