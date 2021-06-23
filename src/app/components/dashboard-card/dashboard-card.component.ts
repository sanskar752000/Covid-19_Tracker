import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  @Input('totalConfirmed')
  totalConfirmed?: string;
  @Input('totalDeaths')
  totalDeaths?: string;
  @Input('totalRecovered')
  totalRecovered?: string;
  @Input('newConfirmed')
  newConfirmed?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
