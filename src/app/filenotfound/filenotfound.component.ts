import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations'
import { Title } from '@angular/platform-browser';
import run from './index';

@Component({
  selector: 'app-filenotfound',
  templateUrl: './filenotfound.component.pug',
  styleUrls: ['./filenotfound.component.scss'],
  animations: [
    trigger('glitchState', [
      state('start', style({
        opacity: '1',
        scale: '1  1',
        filter: 'blur(0) invert(0)'
      })),
      state('end', style({
        opacity: '0',
        scale: '1 10',
        filter: 'blur(1em) invert(100%)',
        translate: '0 300%'
      })),
      transition('start => end', animate(2000)),
      transition('end => start', animate(2000))
    ]),

    trigger('rotateState', [
      state('normal', style({
        rotate: 'z 0deg',
        scale: '1',
      })),
      state('1turn', style({
        rotate: 'z 360deg',
        scale: '1',
      })),
      transition('normal => 1turn', animate(2000))
    ])
  ]
})

export class FilenotfoundComponent implements AfterViewInit{
  glitchState = 'normal';
  rotateState = 'normal';
  dynamicClasses = ["word", "letter"];

  constructor(title: Title) {
    title.setTitle('Adam Koch - File Not Found');
  }
  ngAfterViewInit(): void {
    run();
    setTimeout(this.start, 1);
    setTimeout(this.oneturn, 1);
  }
  oneturn = () => {
    this.rotateState = "1turn"; 
    setTimeout(() => this.normal(), 2000);
  }
  normal = () => {
    this.rotateState = "normal"; 
    setTimeout(this.oneturn, 0);
  }

  end = () => {
    this.glitchState = "end";
    setTimeout(this.start, 2000);
  }
  start = () => {
    this.glitchState = "start";
    setTimeout(this.end, 3000);
  }
}
