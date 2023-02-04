import { Component, Input, OnInit } from '@angular/core';
import { values } from 'lodash';
import { map, of, tap } from 'rxjs';

@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.pug',
  styleUrls: ['./postpreview.component.scss']
})
export class PostpreviewComponent implements OnInit {
  @Input() key: string = '';
  @Input() postTitle: string = '';
  @Input() date?: string;
  @Input() link?: string;
  @Input() name?: string;
  @Input() excerpt: string = '';

  private dateParts: string[] = [];

  ngOnInit() {
    if (!this.date || !this.link) {
      // Just practicing my reactive programming
      of(this.key)
        .pipe(
          map(val => [this.key.substring(0, 4), this.key.substring(4, 6), this.key.substring(6, 8)]),
          tap((value: string[]) => !!this.date || (this.date = value.join("-"))),
          tap((value: string[]) => !!this.link || (this.link = value.join("/"))))
        .subscribe();
    }
    !!this.name || (this.name = this.postTitle);
  }

}
