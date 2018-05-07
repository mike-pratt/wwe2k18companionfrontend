
export class SystemConfiguration {

    public languageCode: string;

    constructor(data: SystemConfiguration) {
        this.languageCode = data.languageCode || '';
    }
}