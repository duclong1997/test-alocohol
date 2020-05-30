export class SearchTitle{
    private _title: string;

    constructor() { }

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

}