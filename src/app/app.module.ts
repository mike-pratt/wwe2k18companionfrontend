import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule, ModalModule } from 'ngx-bootstrap';
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
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ShowServiceService} from './shared/services/shows/show-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowsCreateComponent } from './shows/modals/shows-create/shows-create.component';
import { WrestlerService } from './shared/services/roster/wrestler.service';
import { WrestlersCreateComponent } from './roster/modals/wrestlers-create/wrestlers-create.component';

    @NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        ShowsListComponent,
        RosterListComponent,
        RosterViewComponent,
        ChampionshipListComponent,
        ChampionshipViewComponent,
        ShowsViewComponent,
        ShowsCreateComponent,
        WrestlersCreateComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
        AlertModule.forRoot(),
        SharedModule,
        ComponentsModule,
        NgxDatatableModule,
        AngularFontAwesomeModule,
        ModalModule.forRoot()
    ],
    providers: [AuthGuard,
                AuthService,
                PersistenceService,
                ShowServiceService,
                WrestlerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
