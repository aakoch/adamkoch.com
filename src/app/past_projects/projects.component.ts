import { AfterViewInit, Component, isDevMode, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JsonLdService } from 'src/app/shared/json-ld.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.pug',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  constructor(private window: Window, title: Title, private jsonLdService: JsonLdService) {
  }

  ngOnInit() {
    this.jsonLdService.insertSchema(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Past Projects"
        }]
      }, 'structure-breadcrumb');
  }

  ngAfterViewInit() {
    (<any>this.window).google?.search.cse.element.go()
  }
  isDevMode() {
    return isDevMode();
  }
}
