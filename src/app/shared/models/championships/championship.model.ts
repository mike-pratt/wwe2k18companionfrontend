import {BaseModel} from '../base.model';

export class Championship extends BaseModel {
    public name: string;
    public level: number;
    public champion_id?: number;

    constructor(data: Championship) {
        super(data);
        this.name = data.name;
        this.level = data.level;
        this.champion_id = data.champion_id;
    }
}
