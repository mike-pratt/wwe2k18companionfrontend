import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CONFIGURATION } from '../../app.constants';

// Models
import { AuthToken } from '../models/auth/token.model';

// Services
import { AuthService } from '../services/auth/auth.service';
import { PersistenceService } from '../services/system/persistence.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router: Router,
                private _persistenceService: PersistenceService,
                private _authService: AuthService) {}

    public canActivate(next: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): Observable<boolean> | boolean {
        const authToken = AuthService.getAuthToken();
        if (!authToken) {
            this.redirectToLogin(state.url);
            return false;
        }

        const isTokenExpired = ((Date.now() - authToken.date) > CONFIGURATION.authCacheTime);

        if (!isTokenExpired && this._persistenceService.authUser.getValue()) {
            return true;
        } else if (isTokenExpired || !this._persistenceService.authUser.getValue()) {
            return Observable.fromPromise(
                new Promise<boolean>((resolve, reject) => {
                    this._authService
                        .getRefresh()
                        .subscribe((data: AuthToken) => {
                                if (data) {
                                    resolve(true);
                                } else {
                                    AuthService.clearAuthToken();
                                    this._persistenceService.authUser.next(undefined);
                                    resolve(false);
                                    this.redirectToLogin(state.url);
                                }
                            },
                            (error) => {
                                AuthService.clearAuthToken();
                                this._persistenceService.authUser.next(undefined);
                                resolve(false);
                                this.redirectToLogin(state.url);
                            });
                }));
        } else {
            this.redirectToLogin(state.url);
            return false;
        }
    }

    private redirectToLogin(url: string): void {
        // TODO: Remove this debug line once auth is fixed.
        console.log('redirect_guard.cmp');
        this._router.navigate(['/auth/login', {
            redirectTo: url
        }]);
    }
}
