import { ViewportScroller } from '@angular/common';
import { AfterContentInit, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective implements AfterContentInit {

  constructor(private view: ViewContainerRef) {}

  ngAfterContentInit(): void {
    // let componentView = this.view.createComponent._data.componentView;
  }

  @Input("appScrollListener")
  handler: Function = () => {};

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    // let pos: [number, number] = this.viewportScroller.getScrollPosition();
    // debugger;
    // this.handler.apply(componentView.component, [$event]);
  }
}