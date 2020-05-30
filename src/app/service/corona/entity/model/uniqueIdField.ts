export class UniqueIdField{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _isSystemMaintained: boolean;
    public get isSystemMaintained(): boolean {
        return this._isSystemMaintained;
    }
    public set isSystemMaintained(value: boolean) {
        this._isSystemMaintained = value;
    }

}