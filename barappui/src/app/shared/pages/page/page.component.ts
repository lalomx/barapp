import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent {

  @Input() title: string;
  @Input() show = true;
}
