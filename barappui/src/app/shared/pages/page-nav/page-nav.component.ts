import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.less']
})
export class PageNavComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  isTabbed: boolean;
  title: string;
  routes = [];

  ngOnInit() {
    this.route.data
      .subscribe((data: any) => {
        this.title = data.title;
        this.isTabbed = data.isTabbed;
        this.routes = data.tabs;
      });
  }
}
