import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {AuthUser} from '../../models/auth/user.model';
import {SystemConfiguration} from '../../models/system/configuration.model';

@Injectable()
export class PersistenceService {

    public systemConfiguration: BehaviorSubject<SystemConfiguration> =
        new BehaviorSubject(undefined);
    public authUser: BehaviorSubject<AuthUser> =
        new BehaviorSubject(undefined);

}