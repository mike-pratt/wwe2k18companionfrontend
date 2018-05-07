
export class LoginDTO {
    public email: string;
    public password: string;

    constructor(data: LoginDTO) {
        this.email = data.email;
        this.password = data.password;
    }
}