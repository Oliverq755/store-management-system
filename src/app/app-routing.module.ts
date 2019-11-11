import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SellsStockComponent } from './components/sells-stock/sells-stock.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: MainpageComponent,children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'sellsHistory',
        component: SellsStockComponent
      }
    ]
  },
  
  // { path: '**', component: PageNotFoundComponent } //creating this page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
