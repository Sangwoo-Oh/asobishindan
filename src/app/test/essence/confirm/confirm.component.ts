import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  selectedEpisode: string[];

  constructor(
    private testService: TestService
  ) {
    this.selectedEpisode = this.testService.getEpiArrayData();
  }

  ngOnInit(): void {
  }

}
