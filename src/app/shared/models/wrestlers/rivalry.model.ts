import { BaseModel } from '../base.model';
import { Wrestler } from './wrestler.model';

export class Rivalry extends BaseModel {
    public wrestler_id: number;
    public rival_id: number;
    public rival: Wrestler;
    public level: number;
    public length: string;
    public active: boolean;

    constructor(data: Rivalry) {
        super(data);
        this.wrestler_id = data.wrestler_id;
        this.rival_id = data.rival_id;
        this.length = data.length;
        this.level = data.level;
        this.active = data.active;
    }
}
