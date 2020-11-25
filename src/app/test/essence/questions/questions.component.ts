import { Component, OnInit } from '@angular/core';
import { Episode } from '../../../shared/models/episode';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  episodes: Episode[] = [
    new Episode(1, '体育会系部活・サークル')
  ];

  constructor() { }

  ngOnInit() {
    this.episodes = [
      new Episode(1, '体育会系部活・サークル'),
      new Episode(2, '文科系部活・サークル'),
      new Episode(3, 'アルバイト'),
      new Episode(4, '学業・ゼミ活動'),
      new Episode(5, 'ビジネス系課外活動・長期インターン'),
      new Episode(5, 'ソーシャル系課外活動・ボランティア')
    ];
  }

}
