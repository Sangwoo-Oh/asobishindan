import { Component, OnInit } from '@angular/core';
import { EpisodeCat } from "./episode-cat";

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


  constructor() { }

  ngOnInit() {
  }

}
