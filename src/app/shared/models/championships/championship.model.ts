import {BaseModel} from '../base.model';

export class Championship extends BaseModel {
    public name: string;
    public isCruiserweight: boolean;

    constructor(data: Championship) {
        super(data);
        this.name = data.name;
        this.isCruiserweight = data.isCruiserweight;
    }
}
