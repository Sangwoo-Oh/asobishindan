import { Component, OnInit } from '@angular/core';
import { RecommendService } from "../recommend.service";

@Component({
  selector: 'app-recommend-detail',
  templateUrl: './recommend-detail.component.html',
  styleUrls: ['./recommend-detail.component.css']
})
export class RecommendDetailComponent implements OnInit {
  actData: any;

  constructor(
    private recommendService: RecommendService
  ) {
    this.actData = this.recommendService.getData();
  }
  ngOnInit(): void {
  }
}
