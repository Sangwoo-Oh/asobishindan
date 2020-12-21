import { Component, OnInit } from '@angular/core';
import { RecommendService } from "../recommend.service";
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recommend-list',
  templateUrl: './recommend-list.component.html',
  styleUrls: ['./recommend-list.component.css']
})
export class RecommendListComponent implements OnInit {
  activity: any;
  cor_pref1: number;
  cor_pref2: number;
  cor_pref3: number;
  param: any;
  data: any;
  prefs: any;

  constructor(
    private recommendService: RecommendService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activity = new Array();
    /*
    this.activity = new Array(
      {
        act_id: 1,
        act_label: 'ボードゲーム',
        act_copy: 'キャッチコピーが入ります',
        act_overviw: '人狼ゲームは複数人でプレイする遊びで、村人と狼の2つの陣営に分かれて戦います。村人は自分たちの中にまぎれた狼を探し当て、狼は正体がバレない様に逃げながら目的を果たそうとします。進行はすべて話し合い形式で進んでいくため、心理と演技を織り交ぜた頭脳戦が問われます。',
        act_main_img: 'recommend_bg_01',
        act_info: [
          {
            act_heading: '対戦や協力プレイなど仲間と盛り上がれる要素がふんだんにある',
            act_text: 'ボードゲームは、1年間で平均1000タイトル（世界で）の新作が作られていると言われます。それだけ多く生まれているボードゲームは、真っ向勝負な対戦モノから仲間と協力してゲームをクリアするモノまで1つ一つが非常にユニークです。皆で楽しむ要素が各所にちりばめられています。',
            act_img: ''
          },
          {
            act_heading: '時間を忘れて没頭できるゲーム性、上達していくほどより面白くなる',
            act_text: 'ボードゲームは繰り返し遊ぶほどに楽しくなってきます。経験があることで難易度が上がったり、新たな遊び方を見出したり、上達した者同士でやる面白さが生まれたりします。気が付けば、1時間はあっという間に経過していることはあるあるです。',
            act_img: ''
          },
          {
            act_heading: '始めてでも皆が教えてくれる',
            act_text: 'ボードゲームの最大の特徴は、初心者大歓迎という点です。ほとんどのゲームが基本的には初めてプレイされる前提なので、皆で教え合いながら楽しむ文化が自然と醸成されています。',
            act_img: ''
          }
        ],
        preferences: [
          {
            id: '2',
            label: '華々しさ、美しさを楽しむ'
          },
          {
            id: '3',
            label: '出会いや繋がりを楽しむ（人と関わる楽しさ'
          },
          {
            id: '4',
            label: '競争、対戦を楽しむ'
          },
          {
            id: '5',
            label: '協力、一体感、貢献している感覚を楽しむ'
          },
          {
            id: '6',
            label: '頭を使って考える楽しさ（思考が好き'
          },
          {
            id: '6',
            label: '運や不確実性を楽しむ（予想する楽しさ'
          }
        ]
      },
      {
        act_id: 2,
        act_label: '人狼ゲーム',
        act_copy: 'キャッチコピーが入ります',
        act_overviw: '人狼ゲームは複数人でプレイする遊びで、村人と狼の2つの陣営に分かれて戦います。村人は自分たちの中にまぎれた狼を探し当て、狼は正体がバレない様に逃げながら目的を果たそうとします。進行はすべて話し合い形式で進んでいくため、心理と演技を織り交ぜた頭脳戦が問われます。',
        act_main_img: 'recommend_bg_02',
        act_info: [
          {
            act_heading: '対戦や協力プレイなど仲間と盛り上がれる要素がふんだんにある',
            act_text: 'ボードゲームは、1年間で平均1000タイトル（世界で）の新作が作られていると言われます。それだけ多く生まれているボードゲームは、真っ向勝負な対戦モノから仲間と協力してゲームをクリアするモノまで1つ一つが非常にユニークです。皆で楽しむ要素が各所にちりばめられています。',
            act_img: ''
          },
          {
            act_heading: '時間を忘れて没頭できるゲーム性、上達していくほどより面白くなる',
            act_text: 'ボードゲームは繰り返し遊ぶほどに楽しくなってきます。経験があることで難易度が上がったり、新たな遊び方を見出したり、上達した者同士でやる面白さが生まれたりします。気が付けば、1時間はあっという間に経過していることはあるあるです。',
            act_img: ''
          },
          {
            act_heading: '始めてでも皆が教えてくれる',
            act_text: 'ボードゲームの最大の特徴は、初心者大歓迎という点です。ほとんどのゲームが基本的には初めてプレイされる前提なので、皆で教え合いながら楽しむ文化が自然と醸成されています。',
            act_img: ''
          }
        ],
        preferences: [
          {
            id: '2',
            label: '華々しさ、美しさを楽しむ'
          },
          {
            id: '3',
            label: '出会いや繋がりを楽しむ（人と関わる楽しさ'
          },
          {
            id: '4',
            label: '競争、対戦を楽しむ'
          },
          {
            id: '5',
            label: '協力、一体感、貢献している感覚を楽しむ'
          },
          {
            id: '6',
            label: '頭を使って考える楽しさ（思考が好き'
          },
          {
            id: '6',
            label: '運や不確実性を楽しむ（予想する楽しさ'
          }
        ]
      },
    );
    */
    this.cor_pref1 = 0
    this.cor_pref2 = 0
    this.cor_pref3 = 0
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.cor_pref1 = params['cor_pref1'];
      this.cor_pref2 = params['cor_pref2'];
      this.cor_pref3 = params['cor_pref3'];
    })
    this.data = new Array();
    this.prefs = new Array();
  }

  ngOnInit(): void {
    this.recommendService.getActivity(this.cor_pref1, this.cor_pref2, this.cor_pref3).subscribe(
      response =>  {
        this.data = response;
        for (let index = 0; index < this.data.length; index++) {
          const element = this.data[index];
          this.data[index].act_main_img = 'recommend_bg_01';
          this.recommendService.getPrefFromAct(this.data[index].act_id).subscribe(
            response => {
              this.recommendService.setPrefsData(response);
              this.data[index].preferences = this.recommendService.getPrefsData();
              this.recommendService.setData(this.data);
              this.activity.push(this.recommendService.getData());
            },
            err => alert(err)
          )
        }
      },
      err => alert(err)
    )
  }

  onClick(data: any) {
    this.recommendService.setData(data);
  }

}
