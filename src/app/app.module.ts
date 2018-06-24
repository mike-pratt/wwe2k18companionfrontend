import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {AuthService} from './shared/services/auth/auth.service';
import {AuthGuard} from './shared/guards/auth.guard';
import {PersistenceService} from './shared/services/system/persistence.service';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from './shared/shared.module';
import {ComponentsModule} from './shared/components/components.module';
import { ShowsListComponent } from './shows/shows-list/shows-list.component';
import { RosterListComponent } from './roster/roster-list/roster-list.component';
import { RosterViewComponent } from './roster/roster-view/roster-view.component';
import { ChampionshipListComponent } from './championships/championship-list/championship-list.component';
import { ChampionshipViewComponent } from './championships/championship-view/championship-view.component';
import { ShowsViewComponent } from './shows/shows-view/shows-view.component';

    @NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ShowsListComponent,
        RosterListComponent,
        RosterViewComponent,
        ChampionshipListComponent,
        ChampionshipViewComponent,
        ShowsViewComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
        AlertModule.forRoot(),
        SharedModule,
        ComponentsModule
    ],
    providers: [AuthGuard,
                AuthService,
                PersistenceService],
    bootstrap: [AppComponent]
})
export class AppModule { }