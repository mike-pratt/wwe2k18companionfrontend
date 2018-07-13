import {BaseModel} from '../base.model';

export class Show extends BaseModel {
    public name: string;

    constructor(data: Show) {
        super(data);
        this.name = data.name;
    }
}
