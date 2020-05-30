import { AttributeModel } from './attributeModel';

export class FeatureModel{
    private _attributes: AttributeModel;
    public get attributes(): AttributeModel {
        return this._attributes;
    }
    public set attributes(value: AttributeModel) {
        this._attributes = value;
    }
    
}