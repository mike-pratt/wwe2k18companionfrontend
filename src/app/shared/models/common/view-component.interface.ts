import {FormGroup} from '@angular/forms';
import {Subscription} from 'rxjs';
import {BaseModel} from '../base.model';

export interface IBaseModelViewComponent {
    form: FormGroup;
    editButtonPressed: boolean;
    edit(): void;
    saveChanges(): void;
    cancelEdit(): void;
    delete(): void;
    showData(): void;
    // serviceGetById(id: number): Subscription;
    // serviceUpdate(model: BaseModel): Subscription;
    // serviceDelete(id: number): Subscription;
}