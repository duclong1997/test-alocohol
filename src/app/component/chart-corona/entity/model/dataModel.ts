export class DataModel{
    private _data: any[];
    public get data(): any[] {
        return this._data;
    }
    public set data(value: any[]) {
        this._data = value;
    }

    private _label: string;
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }

}