import {BaseModel} from '../base.model';
import {Show} from '../shows/show.model';

export class Wrestler extends BaseModel {
    public name: string;
    public height: string;
    public weight: string;
    public hometown: string;
    public show_id: number;

    constructor(data: Wrestler) {
        super(data);
        this.name = data.name;
        this.height = data.height;
        this.weight = data.weight;
        this.hometown = data.hometown;
        this.show_id = data.show_id;
    }
}
