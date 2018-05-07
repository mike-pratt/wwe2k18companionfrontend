
export class AuthToken {
    public token: string;
    public date: number;

    constructor(tokenInfo: AuthToken) {
        this.token = tokenInfo.token || '';
        this.date = tokenInfo.date;
    }
}