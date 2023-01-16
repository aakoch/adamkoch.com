import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import debounce from 'lodash/debounce';

@Directive({
  selector: '[appPrefetch]'
})
export class PrefetchDirective {
  @Input() set appPrefetch(gotoLocation: string) {
    console.log("setting url = ", gotoLocation);
    let el: ElementRef = this.vcRef.element;
    console.log("elementRef=", el);
    // let a: HTMLElement = el.nativeElement;
    // a.addEventListener("mouseenter", (ev) => {
    //   console.log("entering mouseover");
    //   this.prefetch(gotoLocation);
    // });
  }

  prefetchedLocations: string[] = [];

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
    this.debouncedPrefetch = debounce(this.prefetch, 10)
  }

  prefetch(gotoLocation: string) {
    // console.log('calling prefetch');
    // if (this.prefetchedLocations.includes(gotoLocation))
    //   return;
    // let link = document.createElement("link")
    // link.setAttribute("rel", "prefetch")
    // link.setAttribute("href", gotoLocation)
    // document.body.appendChild(link)
    // this.prefetchedLocations.push(gotoLocation)
  }
  debouncedPrefetch(url: string) {
  }

}
