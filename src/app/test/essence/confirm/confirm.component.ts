import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  selectedEpisodes: any;
  subscription = new Subscription();

  constructor(
    private testService: TestService
  ) {
    this.selectedEpisodes = this.testService.getEpiArrayData();
    /*
    this.selectedEpisodes = new Array();
    this.selectedEpisodeId.forEach(element => {
      this.testService.getEpisodeFromId(element).subscribe(
        response =>  {
          console.log(response);
          this.selectedEpisodes.push(response);
        },
        err => alert(err)
      );
    });
    */
  }

  ngOnInit(): void {
  }

}
