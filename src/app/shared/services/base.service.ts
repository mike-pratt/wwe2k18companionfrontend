import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {CONFIGURATION} from '../../app.constants';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseService {
    protected httpPrefix: string;
    protected actionUrl: string;

    private headers: Headers;

    public constructor(protected _http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.httpPrefix = 'http://';
        if (CONFIGURATION.isDev) {
            this.httpPrefix = CONFIGURATION.devConfig.useHttps ? 'https://' : 'http://';
            this.actionUrl = this.httpPrefix + CONFIGURATION.devConfig.server +
                CONFIGURATION.devConfig.apiUrl;
        } else {
            this.httpPrefix = CONFIGURATION.prodConfig.useHttps ? 'https://' : 'http://';
            this.actionUrl = this.httpPrefix + CONFIGURATION.prodConfig.server +
                CONFIGURATION.prodConfig.apiUrl;
        }
    }

    protected getRequestOptions(): RequestOptions {
        const newRequestHeaders = new Headers(this.headers);
        let isAuthorised = false;
        const authToken = AuthService.getAuthToken();

        if (authToken) {
            isAuthorised = true;
            newRequestHeaders.append('Authorization', 'Bearer' + authToken.token);
        }

        return new RequestOptions({
            headers: newRequestHeaders,
            withCredentials: isAuthorised
        });
    }

    protected static handleErrors(error: Response): ErrorObservable {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}