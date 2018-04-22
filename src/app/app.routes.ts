import {Route, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent}, // canActivate: [AuthGuard] },
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
