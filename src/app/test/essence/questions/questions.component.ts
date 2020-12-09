import { Component, OnInit } from '@angular/core';
import { EpisodeCat } from "./episode-cat";
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
      label: '学業関連（研究・留学など）'
    },
    {
      id: 4,
      label: 'ソーシャル系課外活動'
    },
    {
      id: 5,
      label: 'ビジネス系課外活動'
    }
  ]
  data: any;


  constructor(
    private testService: TestService,
    private router: Router) {
    this.data = new Array()
  }

  ngOnInit() {
  }

  /*
   * 選択した活動ジャンルからエピソード取得
   */
  public onSubmit(event: any) {
    this.testService.getEpisode(event.target.id).subscribe(
      response =>  {
        this.data = response;
        this.testService.setData(this.data);
      },
      err => alert(err)
    );
    this.router.navigate(['/test/essence/episodes/'+ event.target.id]);
  }
}
