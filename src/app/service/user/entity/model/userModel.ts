import { PositionModel } from './positionModel';

export class UserModel{
    private _street: string;
    public get street(): string {
        return this._street;
    }
    public set street(value: string) {
        this._street = value;
    }
    private _suite: string;
    public get suite(): string {
        return this._suite;
    }
    public set suite(value: string) {
        this._suite = value;
    }
    private _city: string;
    public get city(): string {
        return this._city;
    }
    public set city(value: string) {
        this._city = value;
    }
    private _zipcode: string;
    public get zipcode(): string {
        return this._zipcode;
    }
    public set zipcode(value: string) {
        this._zipcode = value;
    }
    private _geo: PositionModel;
    public get geo(): PositionModel {
        return this._geo;
    }
    public set geo(value: PositionModel) {
        this._geo = value;
    }
}