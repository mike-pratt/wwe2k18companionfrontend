
export class BaseModel {
    public id: number;

    constructor(data: BaseModel) {
        this.id = data.id;
    }
}