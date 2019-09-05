import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {interval, Subscription} from 'rxjs';

/* 最少 2 张图片，默认显示最后一张，然后再从第一张开始，循环播放。 */
const IMAGES = [
  'assets/image/dyzm.jpg',
  'assets/image/dyzm2.jpg'
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('backstretch', [
      state('0', style({})),
      state('1', style({})),
      transition('0 <=> 1', [
        animate('750ms', keyframes([
          style({opacity: 0}),
          style({opacity: 1}),
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  title = '地狱之门';
  imageIndex = 0;
  backImage = IMAGES[IMAGES.length - 1];

  constructor() {
  }

  private subscription: Subscription;

  ngOnInit() {
    this.subscription = interval(3000).subscribe(value => {
      this.imageIndex = value % IMAGES.length;
      this.backImage = IMAGES[this.imageIndex];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
