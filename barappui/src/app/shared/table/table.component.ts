import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  constructor() { }

  loading = true;

  ngOnInit() {
    setTimeout(() => this.loading = false, 5000);
  }
}
