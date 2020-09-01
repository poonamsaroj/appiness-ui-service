import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataval;
  datavalClone;

  constructor(private data: ApiService) { }

  // Global filter on table
  applyFilter(filterValue: string) {
    this.dataval = this.datavalClone
    if (this.dataval !== undefined) {
      const newdata = this.dataval.filter(name => name['login'].trim().toLowerCase().includes(filterValue.trim().toLowerCase()))
      this.dataval = newdata;
    }
    if(filterValue == '') this.dataval = this.datavalClone
  }

  ngOnInit() {
    // Fetching link data
    this.data.getList().subscribe(data => {
      this.dataval = data;
      this.datavalClone = data;
    });
  }

}