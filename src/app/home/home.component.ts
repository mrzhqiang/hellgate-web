import {Component, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {interval} from 'rxjs';

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
export class HomeComponent implements OnInit {
  title = '地狱之门';
  imageIndex = 0;
  backImage = '';

  constructor() {
  }

  ngOnInit() {
    interval(3000).subscribe(value => {
      this.imageIndex = value % 2;
      this.backImage = IMAGES[this.imageIndex];
    });
  }
}
