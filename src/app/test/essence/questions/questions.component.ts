import { Component, OnInit } from '@angular/core';
import { EpisodeCat } from "./episode-cat";
import { FormGroup, FormControl } from '@angular/forms';
import { TestService } from '../../test.service';
import { Router } from '@angular/router';
import { ResponseModel } from '../../../model/response.model';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  episodeCats:EpisodeCat[] = [
    {
      id: 1,
      label: '体育会系部活・サークル'
    },
    {
      id: 2,
      label: '文化系部活・サークル'
    },
    {
      id: 3,
      label: 'アルバイト'
    },
    {
      id: 4,
      label: '学業・ゼミ活動'
    },
    {
      id: 5,
      label: 'ビジネス系課外活動・長期インターン'
    },
    {
      id: 6,
      label: 'ソーシャル系課外活動・ボランティア'
    }
  ]

  data: ResponseModel[];
  testForm = new FormGroup({
    zipCode: new FormControl('')
  });


  constructor(
    private testService: TestService,
    private router: Router) {
    this.data = new Array()
  }

  ngOnInit() {
  }
  public onSubmit(event: any): void {
    this.testService.getEpisode(event.target.id).subscribe(
      //response =>  console.log(response),
      response =>  {
        this.data.push(response),
        this.data.forEach(response => this.data = JSON.parse(JSON.stringify(response)));
        this.testService.setData(this.data);
      },
      err => alert(err)
    );
    this.router.navigate(['/test/essence/episodes/'+ event.target.id]);
  }
}
