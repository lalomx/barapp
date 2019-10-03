import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  constructor() { }

  @Input() isTabbed: boolean;
  @Input() title: string;

  ngOnInit() {
  }

}
