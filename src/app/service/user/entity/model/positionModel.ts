export class PositionModel{
    private _lat: string;
    public get lat(): string {
        return this._lat;
    }
    public set lat(value: string) {
        this._lat = value;
    }
    private _lng: string;
    public get lng(): string {
        return this._lng;
    }
    public set lng(value: string) {
        this._lng = value;
    }
}