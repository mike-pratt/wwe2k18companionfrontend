import {Route, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {ShowsListComponent} from './shows/shows-list/shows-list.component';
import {ShowsViewComponent} from './shows/shows-view/shows-view.component';
import {RosterListComponent} from './roster/roster-list/roster-list.component';
import {RosterViewComponent} from './roster/roster-view/roster-view.component';
import {ChampionshipListComponent} from './championships/championship-list/championship-list.component';
import {ChampionshipViewComponent} from './championships/championship-view/championship-view.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, // , canActivate: [AuthGuard] },
    { path: 'shows', component: ShowsListComponent },
    { path: 'shows/{id}', component: ShowsViewComponent },
    { path: 'roster', component: RosterListComponent },
    { path: 'roster/{id}', component: RosterViewComponent }, // 'wrestler/{id} instead?
    { path: 'championships', component: ChampionshipListComponent },
    { path: 'championships/{id}', component: ChampionshipViewComponent },

    // { path: 'auth/login', component: LoginComponent },

    // { path: 'auth/logout', component: LogoutComponent, canActivate: [AuthGuard] },
    // { path: 'auth/changepassword', component: AuthChangePasswordComponent, canActivate: [AuthGuard] }, // Temp, remove
    // { path: '404', component: NoContentComponent },
    // { path: '**', component: NoContentComponent }

    //  { path: 'forgot-password', component: ForgotPasswordComponent },

    // {
    //     path: 'assemblies',
    //     component: AssembliesComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         { path: '', redirectTo: 'list', pathMatch: 'full' },
    //         { path: 'list', component: AssembliesListComponent },
    //         { path: 'view/:id', component: AssembliesViewComponent },
    //         // { path: 'create', component: AssembliesCreateComponent },
    //     ]
    //     // { path: 'view/:id/part/:id', component: PartsCurrentViewComponent }
    // },
];
