import {BaseModel} from '../base.model';

export class Wrestler extends BaseModel {
    public name: string;
    public height: string;
    public weight: string;
    public hometown: string;

    constructor(data: Wrestler) {
        super(data);
        this.name = data.name;
        this.height = data.height;
        this.weight = data.weight;
        this.hometown = data.hometown;
    }
}
