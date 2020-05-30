export class FieldModel{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _type: string;
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    private _alias: string;
    public get alias(): string {
        return this._alias;
    }
    public set alias(value: string) {
        this._alias = value;
    }
    private _sqlType: string;
    public get sqlType(): string {
        return this._sqlType;
    }
    public set sqlType(value: string) {
        this._sqlType = value;
    }
    private _domain: string;
    public get domain(): string {
        return this._domain;
    }
    public set domain(value: string) {
        this._domain = value;
    }
    private _defaultValue: string;
    public get defaultValue(): string {
        return this._defaultValue;
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }

}