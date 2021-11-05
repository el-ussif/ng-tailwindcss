import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersLayoutComponent } from 'src/app/layouts/customers-layout/customers-layout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
