import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutesModule } from './app-routes/app-routes.module';
import { LoginRoutingModule } from './login/login-routing/login-routing.module';
import { AdminModule } from './admin/admin.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroService } from './shared/hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    AdminModule,
    LoginRoutingModule,
    AppRoutesModule
  ],
  providers: [
    HeroService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
