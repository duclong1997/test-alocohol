import { CoronaVietnameModel } from './coronaVietnameModel';

export class ProvinceModel{
    
    private _provinces: CoronaVietnameModel[];

    public get provinces(): CoronaVietnameModel[] {
        return this._provinces;
    }
    public set provinces(value: CoronaVietnameModel[]) {
        this._provinces = value;
    }

}