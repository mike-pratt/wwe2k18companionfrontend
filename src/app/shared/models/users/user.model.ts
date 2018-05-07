import {BaseModel} from '../base.model';

export class User extends BaseModel {
    public name: string;
    public email: string;
    public password: string;
    public password_confirmation: string;

    constructor(data: User) { // or (data: any) {
        super(data);
        this.id = data.id;
        this.name = data.name || '';
        this.email = data.email || '';
        this.password = data.password;
        this.password_confirmation = data.password_confirmation;
    }
}