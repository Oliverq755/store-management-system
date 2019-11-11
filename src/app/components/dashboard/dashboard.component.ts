import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { StaticdataService } from 'src/app/services/staticdata.service';
import { AddproductsComponent } from '../addproducts/addproducts.component';
import { BackEndApiService } from 'src/app/services/back-end-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentBalance;
  displayedColumns = ['itemName', 'category', 'amount', 'storeQuantity'];
  dataSource;
  deleteExpense;
  selectedIndex;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public staticData: StaticdataService,
    private dialog: MatDialog,
    private backEndAPI: BackEndApiService
  ) {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.staticData.productDetails);
    this.dataSource.paginator = this.paginator;
  }

  addNewProduct() {
    const dialogRef = this.dialog.open(AddproductsComponent, {
      width: '35%',
    });
  }

  delete(index){
    console.log(index);
    this.selectedIndex  = index;
    if(this.deleteExpense == 'delete'){
      this.deleteExpense = 'restore';
    } else {
      this.deleteExpense = 'delete';
    }
  }

}
