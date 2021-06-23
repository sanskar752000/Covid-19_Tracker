import { GlobalDataSummary } from './../../models/global-data';
import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  totalConfirmed?: any;
  totalDeaths?: any;
  newConfirmed?: any;
  totalRecovered?: any;
  data: GlobalDataSummary[] = [];
  countries: string[] = [];

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getGlobalData().subscribe(result=> {
      this.data = result;
      this.data.forEach(d => {
        this.countries.push(d.country!);
      })
    })
  }

  updateValues(country: string) {
    console.log(country)
    this.data.forEach(d => {
      if(country == "country") {
        this.totalConfirmed = 0;
        this.totalDeaths = 0;
        this.totalRecovered = 0;
        this.newConfirmed = 0;
      }

      if(d.country == country) {
        this.totalConfirmed = d.totalConfirmed;
        this.totalDeaths = d.totalDeaths;
        this.totalRecovered = d.totalRecovered;
        this.newConfirmed = d.newConfirmed;
      }
    })
  }

}
