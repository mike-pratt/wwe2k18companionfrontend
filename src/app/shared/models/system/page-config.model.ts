import { PageBreadcrumb } from './page-breadcrumb.model';

export class PageConfig {

    public title = '';
    public breadcrumbs: PageBreadcrumb[];

    constructor(data: PageConfig) {
        this.title = data.title || '';
        this.breadcrumbs = data.breadcrumbs || undefined;
    }
}