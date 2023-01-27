import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger, AnimationEvent } from '@angular/animations'
import { faAngleDoubleLeft, faAngleDoubleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.pug',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('moveLeft', [
      state('start', style({
        transform: 'rotateX(0turn) translateX(-5px)'
      })),
      state('end', style({
        transform: 'rotateX(.5turn) translateX(-20px)'
      })),
      transition('start => end', animate('600ms ease-in-out'))
    ]),
    trigger('moveRight', [
      state('start', style({
        transform: 'rotateX(0turn) translateX(5px)'
      })),
      state('end', style({
        transform: 'rotateX(.5turn) translateX(20px)'
      })),
      transition('start => end', animate('600ms ease-in-out'))
    ])
  ]
})
export class NavComponent implements OnInit {
  @Input() prevUrl ?: string;
  @Input() prevTitle ?: string;
  @Input() nextUrl ?: string;
  @Input() nextTitle ?: string;
  angleDoubleLeft: IconProp = faAngleDoubleLeft;
  angleDoubleRight: IconProp = faAngleDoubleRight;
  
  ngOnInit(): void {
    // console.log('this=', this);
  }

  moveRight = 'start';
  moveLeft = 'start';
  counter = 0;
  isMouseOver = false;

  onHover(action: string) {
    (<any>this)[action] = 'end'
    this.isMouseOver = true;
  }
  doMouseLeave(action: string) {
    (<any>this)[action] = 'start'
    this.isMouseOver = false;
  }

  onEnd(event: AnimationEvent) {
    // console.log("event=", event);
    if ((event.fromState === "start" && event.toState === "end")){
      
      // requestAnimationFrame(() => { if (this.isMouseOver) (<any>this)[event.triggerName] = "end2" })
    }
    else if ((event.fromState === "end" && event.toState === "end2")) {
      // requestAnimationFrame(() => { if (this.isMouseOver) (<any>this)[event.triggerName] = "start" })
    }
  }
}
