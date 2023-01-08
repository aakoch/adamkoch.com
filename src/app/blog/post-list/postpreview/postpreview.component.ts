import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.pug',
  styleUrls: ['./postpreview.component.scss']
})
export class PostpreviewComponent {
  @Input() key: string = '';
  @Input() postTitle: string = '';
  @Input() date: string = '';
  @Input() link: string = '';
  @Input() name: string = '';
  @Input() excerpt: string = '';
  
}
