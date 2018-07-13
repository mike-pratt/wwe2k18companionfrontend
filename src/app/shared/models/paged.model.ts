export class Paged<T> {

    public total: number;
    public per_page: number;
    public current_page: number;
    public last_page: number;
    public next_page_url: string;
    public prev_page_url: string;
    public from: number;
    public to: number;
    public data: T[];

    constructor(data: Paged<T>) {
        this.total = data.total;
        this.per_page = data.per_page;
        this.current_page = data.current_page;
        this.last_page = data.last_page;
        this.next_page_url = data.next_page_url || '';
        this.prev_page_url = data.prev_page_url || '';
        this.from = data.from;
        this.to = data.to;
        this.data = data.data || undefined;
    }
}