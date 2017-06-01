import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisService } from 'app/crisis-center/crisis.service';

import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisCenterHomeComponent, CrisisDetailComponent],
  providers: [
    CrisisService
  ]
})
export class CrisisCenterModule { }
