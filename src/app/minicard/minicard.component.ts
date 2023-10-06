import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDoubleRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.scss']
})
export class MinicardComponent {
  @Input() card: any;
  @Input() first = false;
  externalLinkAlt: IconProp = faExternalLinkAlt;
  angleDoubleRight: IconProp = faAngleDoubleRight;
  constructor(private router: Router, private window: Window) {
  }
  goto(gotoLocation: string, external: boolean) {
    if (external) {
      window.location.href = gotoLocation;
    }
    else {
      this.router.navigateByUrl(gotoLocation);
    }
  }
}
