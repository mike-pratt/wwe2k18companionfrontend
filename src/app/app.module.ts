import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule, ModalModule, TabsModule } from 'ngx-bootstrap';
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
import { WrestlersListComponent } from './wrestlers/wrestlers-list/wrestlers-list.component';
import { WrestlersViewComponent } from './wrestlers/wrestlers-view/wrestlers-view.component';
import { ShowsViewComponent } from './shows/shows-view/shows-view.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ShowService} from './shared/services/shows/show.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowsCreateComponent } from './shows/modals/shows-create/shows-create.component';
import { WrestlerService } from './shared/services/wrestlers/wrestler.service';
import { WrestlersCreateComponent } from './wrestlers/modals/wrestlers-create/wrestlers-create.component';
import { WrestlersComponent } from './wrestlers/wrestlers.component';
import { ShowsComponent } from './shows/shows.component';
import { ChampionshipsListComponent } from './championships/championships-list/championships-list.component';
import { ChampionshipsViewComponent } from './championships/championships-view/championships-view.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { ChampionshipsCreateComponent } from './championships/modals/championships-create/championships-create.component';
import { ChampionshipService } from './shared/services/championships/championship.service';
import { WrestlerRivalsResolverService } from './shared/services/wrestlers/wrestler-rivals-resolver.service';
import { DraftComponent } from './draft/draft.component';

    @NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        ShowsListComponent,
        WrestlersListComponent,
        WrestlersViewComponent,
        ChampionshipsListComponent,
        ChampionshipsViewComponent,
        ChampionshipsCreateComponent,
        ChampionshipsComponent,
        ShowsComponent,
        ShowsViewComponent,
        ShowsCreateComponent,
        WrestlersComponent,
        WrestlersCreateComponent,
        DraftComponent
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
            ModalModule.forRoot(),
            TabsModule.forRoot()
        ],
    providers: [AuthGuard,
                AuthService,
                PersistenceService,
                ShowService,
                WrestlerService,
                ChampionshipService,
                WrestlerRivalsResolverService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
