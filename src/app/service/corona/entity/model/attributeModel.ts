export class AttributeModel{
    private _OBJECTID: string;
    public get OBJECTID(): string {
        return this._OBJECTID;
    }
    public set OBJECTID(value: string) {
        this._OBJECTID = value;
    }
    private _Province_State: string;
    public get Province_State(): string {
        return this._Province_State;
    }
    public set Province_State(value: string) {
        this._Province_State = value;
    }
    private _Country_Region: string;
    public get Country_Region(): string {
        return this._Country_Region;
    }
    public set Country_Region(value: string) {
        this._Country_Region = value;
    }
    private _Last_Update: number;
    public get Last_Update(): number {
        return this._Last_Update;
    }
    public set Last_Update(value: number) {
        this._Last_Update = value;
    }
    private _Lat: number;
    public get Lat(): number {
        return this._Lat;
    }
    public set Lat(value: number) {
        this._Lat = value;
    }
    private _Long_: number;
    public get Long_(): number {
        return this._Long_;
    }
    public set Long_(value: number) {
        this._Long_ = value;
    }
    private _Confirmed: number;
    public get Confirmed(): number {
        return this._Confirmed;
    }
    public set Confirmed(value: number) {
        this._Confirmed = value;
    }
    private _Recovered: number;
    public get Recovered(): number {
        return this._Recovered;
    }
    public set Recovered(value: number) {
        this._Recovered = value;
    }
    private _Deaths: number;
    public get Deaths(): number {
        return this._Deaths;
    }
    public set Deaths(value: number) {
        this._Deaths = value;
    }
    private _Active: number;
    public get Active(): number {
        return this._Active;
    }
    public set Active(value: number) {
        this._Active = value;
    }
    private _Admin2: any;
    public get Admin2(): any {
        return this._Admin2;
    }
    public set Admin2(value: any) {
        this._Admin2 = value;
    }
    private _FIPS: any;
    public get FIPS(): any {
        return this._FIPS;
    }
    public set FIPS(value: any) {
        this._FIPS = value;
    }
    private _Combined_Key: any;
    public get Combined_Key(): any {
        return this._Combined_Key;
    }
    public set Combined_Key(value: any) {
        this._Combined_Key = value;
    }
}