import { GlobalDataSummary } from './../../models/global-data';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed?: any;
  totalDeaths?: any;
  newConfirmed?: any;
  totalRecovered?: any;
  allGlobalData: GlobalDataSummary[] = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(result=> {
 
      this.allGlobalData = result;
    });

    this.dataService.getTotalGlobalData().subscribe(result => {
      this.totalConfirmed = result.TotalConfirmed;
      this.totalDeaths = result.TotalDeaths;
      this.totalRecovered = result.TotalRecovered;
      this.newConfirmed= result.NewConfirmed;
      // console.log(this.totalConfirmed);

    })
  }

}
