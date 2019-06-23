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
        this.headers.append('Access-Control-Allow-Origin', '*');
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

    protected getRequestOptions(includeAuthHeader: boolean = true): RequestOptions {
        const newRequestHeaders = new Headers(this.headers);
        let isAuthorised = false;
        const authToken = includeAuthHeader ? AuthService.getAuthToken() : null;
        // console.log('Auth Token included in header: ', authToken);
        if (authToken) {
            // isAuthorised = true; // FIXME: withCredentials should be true, but commenting this out makes it false. Which is not the proper way, but the app is now correctly consuming the REST API.
                                   // FIXME: so investigate this issue at a later date. Look at removing the Authorization header in the allowedHeaders array in the cors.php file in config, then setting isAuthorised here to true??
            // ALSO, have to log in each time the app is refreshed. fix this!
            newRequestHeaders.append('Authorization', 'Bearer' + authToken.token);
           // console.log('new request headers ', newRequestHeaders);
        }

        return new RequestOptions({
            headers: newRequestHeaders,
            withCredentials: isAuthorised
        });
    }

    protected static handleErrors(error: Response): ErrorObservable<undefined> {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }

}
