import { BaseModel } from '../base.model';
import { Wrestler } from '../wrestlers/wrestler.model';
import { Championship } from './championship.model';


export class ChampionshipReign extends BaseModel {
   // public name: string;
    public days: number;

    // Computed property, not provided by API:
    // public number_of_reigns: number;

    public wrestler_id: number;
    public wrestler: Wrestler;
    public championship_id: number;
    public championship: Championship;

    constructor(data: ChampionshipReign) {
        super(data);
        // this.name = data.name;
        this.days = data.days;
        this.championship_id = data.championship_id;
        this.wrestler_id = data.wrestler_id;
        this.championship = data.championship;
        this.wrestler = data.wrestler;
    }
}
