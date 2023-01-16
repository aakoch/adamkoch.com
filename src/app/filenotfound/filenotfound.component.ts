import { AfterViewInit, Component } from '@angular/core';
import run from './index';

@Component({
  selector: 'app-filenotfound',
  templateUrl: './filenotfound.component.pug',
  styleUrls: ['./filenotfound.component.scss']
})

export class FilenotfoundComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    run();
  }
}
