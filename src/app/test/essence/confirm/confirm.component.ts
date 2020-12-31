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
  epicat_1: any;
  epicat_2: any;
  epicat_3: any;
  epicat_4: any;
  epicat_5: any;

  constructor(
    private testService: TestService
  ) {
    this.selectedEpisodes = this.testService.getEpiArrayData();
    console.log(this.selectedEpisodes);
    this.epicat_1 = new Array();
    this.epicat_2 = new Array();
    this.epicat_3 = new Array();
    this.epicat_4 = new Array();
    this.epicat_5 = new Array();
    this.selectedEpisodes.forEach(element => {
      if (element['epicat'] == 1) {
        this.epicat_1.push(element);
      } else if (element['epicat'] == 2) {
        this.epicat_2.push(element);
      } else if (element['epicat'] == 3) {
        this.epicat_3.push(element);
      } else if (element['epicat'] == 4) {
        this.epicat_4.push(element);
      } else if (element['epicat'] == 5) {
        this.epicat_5.push(element);
      }
    });
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
