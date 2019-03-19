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
    { path: 'auth/login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'shows', component: ShowsListComponent, canActivate: [AuthGuard] },
    { path: 'shows/:id', component: ShowsViewComponent, canActivate: [AuthGuard] },
    { path: 'roster', component: RosterListComponent, canActivate: [AuthGuard] },
    { path: 'wrestler/:id', component: RosterViewComponent, canActivate: [AuthGuard] }, // TODO: Refactor Roster to Wrestler. and also into children paths, see commented out code below.
    { path: 'championships', component: ChampionshipListComponent, canActivate: [AuthGuard] },
    { path: 'championships/:id', component: ChampionshipViewComponent, canActivate: [AuthGuard] },
    // {
    //     path: 'wrestlers',
    //     component: WrestlersComponent,
    //     canActivate: [AuthGuard],
    //     children: [
    //         { path: '', redirectTo: 'list', pathMatch: 'full' },
    //         { path: 'list', component: WrestlersListComponent },
    //         { path: 'view/:id' component: WrestlersViewComponent }
    //     ]
    // },

    // { path: 'auth/logout', component: LogoutComponent, canActivate: [AuthGuard] },
    // { path: 'auth/changepassword', component: AuthChangePasswordComponent, canActivate: [AuthGuard] }, // Temp, remove
    // { path: '404', component: NoContentComponent },
    // { path: '**', component: NoContentComponent }

    //  { path: 'forgot-password', component: ForgotPasswordComponent },
];
