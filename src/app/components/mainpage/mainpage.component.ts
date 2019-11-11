import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StaticdataService } from 'src/app/services/staticdata.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  showSidenav = false;
  menuCategory = [];
  @ViewChild('sidenav') sidenav:any;

  constructor(
    private router: Router,
    public staticData: StaticdataService,
  ) { 
    this.menuCategory = Object.keys(this.staticData.storeMenus);
  }

  ngOnInit() {
    console.log(this.staticData.storeMenus['Variable Expenses'])
  }

  toggleSidenav()
  {
    this.sidenav.toggle();
    this.showSidenav = !this.showSidenav;
  }

  routeDashboardPage(){
    this.router.navigate(['home/dashboard']);
  }

  routeExpenseSetting(){
    this.router.navigate(['home/expense-setting']);
  }

}
