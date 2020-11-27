import { Component, OnInit } from '@angular/core';
import { Basic } from '../../shared/models/basic';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  basics: Basic[] = [
    new Basic(1, '男性', '女性', 'その他')
  ];

  constructor() { }

  ngOnInit(): void {
    this.basics = [
      new Basic(1, '男性', '女性' ,'その他'),
      new Basic(2, '男性', '女性' ,'その他'),
      new Basic(3, '男性', '女性' ,'その他'),
      new Basic(4, '男性', '女性' ,'その他'),
      new Basic(5, '男性', '女性' ,'その他'),
    ];
  }

}
