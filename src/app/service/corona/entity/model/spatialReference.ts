export class SpatialReference{
    private _wkid: string;
    public get wkid(): string {
        return this._wkid;
    }
    public set wkid(value: string) {
        this._wkid = value;
    }
    private _latestWkid: string;
    public get latestWkid(): string {
        return this._latestWkid;
    }
    public set latestWkid(value: string) {
        this._latestWkid = value;
    }

}