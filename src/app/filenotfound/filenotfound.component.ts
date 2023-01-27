import { AfterViewInit, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import run from './index';

@Component({
  selector: 'app-filenotfound',
  templateUrl: './filenotfound.component.pug',
  styleUrls: ['./filenotfound.component.scss']
})

export class FilenotfoundComponent implements AfterViewInit{
  constructor(title: Title) {
    title.setTitle('Adam Koch - File Not Found');
  }
  ngAfterViewInit(): void {
    run();
  }
}
