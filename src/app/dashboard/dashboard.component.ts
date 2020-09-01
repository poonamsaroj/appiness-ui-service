import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/core/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataval
  constructor(private data: ApiService) { }

  ngOnInit() {
    debugger
    this.data.getList().subscribe(data => {
      this.dataval = data;
    });
  }

}