import {BaseService} from '../base.service';
import {CONFIGURATION} from '../../../app.constants';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Subscriber} from 'rxjs/Subscriber';
import {AuthToken} from '../../models/auth/token.model';
import {AuthUser} from '../../models/auth/user.model';
import {PersistenceService} from '../system/persistence.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService extends BaseService {

    public static getAuthToken(): AuthToken {
        const authTokenData = localStorage.getItem(CONFIGURATION.authTokenName);

        if (!authTokenData) {
            return null;
        }

        const authToken: AuthToken = JSON.parse(authTokenData);

        // console.log('auth token : ', authToken);

        if (!authToken) {
            return null;
        }
        return authToken;
    }

    public static clearAuthToken(): void {
        localStorage.removeItem(CONFIGURATION.authTokenName);
    }

    private static setToken(newToken: string): AuthToken {
        const authToken = new AuthToken({
            token: newToken,
            date: Date.now()
        });

        AuthService.clearAuthToken();
        localStorage.setItem(CONFIGURATION.authTokenName,
            JSON.stringify(authToken));

        return authToken;
    }

    constructor(
        _http: Http,
        private _persistence: PersistenceService
    ) {
        super(_http);
        this.actionUrl += 'v0/auth';
    }

    public postLogin(loginEmail: string, loginPassword: string): Observable<AuthUser> {
        return new Observable<AuthUser>((subsriber: Subscriber<AuthUser>) => {
            this._http
                .post(this.actionUrl + '/login',
                    JSON.stringify({
                        email: loginEmail,
                        password: loginPassword
                    }),
                    this.getRequestOptions(false))
                .map((res) => res.json())
                .subscribe((token: AuthToken) => {
                    AuthService.setToken(token.token);
                    this._http
                        .get(this.actionUrl + '/current',
                            this.getRequestOptions())
                        .map((res) => res.json())
                        .subscribe((user: AuthUser) => {
                            this._persistence.authUser.next(new AuthUser(user));
                            subsriber.next(this._persistence.authUser.getValue());
                            subsriber.complete();
                        }, (error) => subsriber.error(error));
                }, (error) => {
                    console.log('error occurred when subscribing auth token.', error);
                    subsriber.error(error);
                });
        });
    }

    public getRefresh(): Observable<AuthToken> {
        return new Observable<AuthToken>((subsriber: Subscriber<AuthToken>) => {
            this._http
                .get(this.actionUrl + '/refresh',
                    this.getRequestOptions())
                .map((res) => res.json())
                .subscribe((token: AuthToken) => {
                    const newToken = AuthService.setToken(token.token);

                    this._http
                        .get(this.actionUrl + '/current',
                            this.getRequestOptions())
                        .map((res) => res.json())
                        .subscribe((user: AuthUser) => {
                            this._persistence.authUser.next(new AuthUser(user));
                            subsriber.next(newToken);
                            subsriber.complete();
                        }, () => subsriber.error());
                }, () => subsriber.error());
        });
    }
}
