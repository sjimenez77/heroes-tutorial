import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../shared/auth-guard.service';

import { AdminComponent } from 'app/admin/admin/admin.component';
import { ManageHeroesComponent } from '../manage-heroes/manage-heroes.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';


const routes: Routes = [
{
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          /*{ path: 'crises', component: ManageCrisesComponent },*/
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AdminRoutesModule { }
