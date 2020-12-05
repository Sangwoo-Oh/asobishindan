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

  constructor(
    private testService: TestService,
    private router: Router,
  ) {
    this.datas = [];
  }
  ngOnInit(): void {
    //this.datas = this.testService.getData();
    //console.log(this.datas);
  }
  ngDoCheck() {
    this.datas = this.testService.getData();
  }
}
