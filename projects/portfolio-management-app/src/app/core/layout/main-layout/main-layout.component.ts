import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abc-pm-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  title = 'abc portfolio management';

  constructor() {}

  ngOnInit(): void {}
}
