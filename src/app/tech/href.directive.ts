import { Directive, ElementRef, Input, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


@Directive({
  selector: '[href]'
})
export class HrefDirective implements OnInit {

  // @Input() set href(url: string) {
    // console.log("setting href is " + url);
  // }

  constructor(
    private viewContainer: ViewContainerRef) {
  }

  ngOnInit(): void {
    const componentRef = this.viewContainer.createComponent(FaIconComponent);
    componentRef.instance.icon = faExternalLinkAlt;
    componentRef.instance.title = "External link indicator";
    componentRef.instance.a11yRole = "img";
    componentRef.instance.render();
  }

}
