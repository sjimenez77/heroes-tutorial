import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutesModule } from './admin-routes/admin-routes.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutesModule
  ],
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageHeroesComponent
  ]
})
export class AdminModule { }
