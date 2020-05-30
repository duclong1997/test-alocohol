import { ProvinceModel } from '../model/provinceModel';

export class CoronaVietNameRes{
    private _data: ProvinceModel;
    public get data(): ProvinceModel {
        return this._data;
    }
    public set data(value: ProvinceModel) {
        this._data = value;
    }
}