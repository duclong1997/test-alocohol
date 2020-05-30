import { UniqueIdField } from '../model/uniqueIdField';
import { SpatialReference } from '../model/spatialReference';
import { FieldModel } from '../model/fieldModel';
import { FeatureModel } from '../model/featureModel';

export class CoronaInfo{
    private _objectIdFieldName: string;
    public get objectIdFieldName(): string {
        return this._objectIdFieldName;
    }
    public set objectIdFieldName(value: string) {
        this._objectIdFieldName = value;
    }
    private _uniqueIdField: UniqueIdField;
    public get uniqueIdField(): UniqueIdField {
        return this._uniqueIdField;
    }
    public set uniqueIdField(value: UniqueIdField) {
        this._uniqueIdField = value;
    }
    private _globalIdFieldName: string;
    public get globalIdFieldName(): string {
        return this._globalIdFieldName;
    }
    public set globalIdFieldName(value: string) {
        this._globalIdFieldName = value;
    }
    private _geometryType: string;
    public get geometryType(): string {
        return this._geometryType;
    }
    public set geometryType(value: string) {
        this._geometryType = value;
    }
    private _spatialReference: SpatialReference;
    public get spatialReference(): SpatialReference {
        return this._spatialReference;
    }
    public set spatialReference(value: SpatialReference) {
        this._spatialReference = value;
    }
    private _fields: FieldModel[];
    public get fields(): FieldModel[] {
        return this._fields;
    }
    public set fields(value: FieldModel[]) {
        this._fields = value;
    }
    private _exceededTransferLimit: boolean;
    public get exceededTransferLimit(): boolean {
        return this._exceededTransferLimit;
    }
    public set exceededTransferLimit(value: boolean) {
        this._exceededTransferLimit = value;
    }
    private _features: FeatureModel[];
    public get features(): FeatureModel[] {
        return this._features;
    }
    public set features(value: FeatureModel[]) {
        this._features = value;
    }

}