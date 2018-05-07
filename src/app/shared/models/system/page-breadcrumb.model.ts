export class PageBreadcrumb {

    public title: string;
    public path: string;

    constructor(data: PageBreadcrumb) {
        this.title = data.title || '';
        this.path = data.path || '';
    }
}