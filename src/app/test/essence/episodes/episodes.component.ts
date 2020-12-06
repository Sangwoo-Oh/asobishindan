import { Component, OnInit } from '@angular/core';
import { TestService } from '../../test.service';
import { ResponseModel } from '../../../model/response.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  public datas: any[];
  public episodeArrays: any[];

  constructor(
    private testService: TestService,
    private router: Router,
  ) {
    this.datas = [];
    this.episodeArrays = new Array();
  }
  ngOnInit(): void {
  }
  ngDoCheck() {
    this.datas = this.testService.getData();
  }
  public onClickEpisode(event: any) {
    this.episodeArrays.push(
      {
        id: event.currentTarget.id,
        epi_label: event.currentTarget.className
      }
    );
    console.log(this.episodeArrays)
    if(this.episodeArrays.length >= 3) {
      this.testService.setEpiArrayData(this.episodeArrays);
      this.router.navigate(['/test/confirm']);
    }
  }
}
