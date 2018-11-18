import {BaseModel} from '../base.model';

export class Show extends BaseModel {
    public name: string;
    public primary_display: string;

    constructor(data: Show) {
        super(data);
        this.name = data.name;
        this.primary_display = data.primary_display;
    }
}
