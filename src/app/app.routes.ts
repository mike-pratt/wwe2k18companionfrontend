import {Route, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, // , canActivate: [AuthGuard] },

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
