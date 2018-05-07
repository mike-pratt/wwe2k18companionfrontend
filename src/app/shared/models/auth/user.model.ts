
export class AuthUser {

    public id: number;
    public name: string;
    public email: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name || '';
        this.email = data.email || '';
    }
}
