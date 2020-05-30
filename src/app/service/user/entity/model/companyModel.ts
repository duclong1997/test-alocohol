export class CompanyModel{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _catchPhrase: string;
    public get catchPhrase(): string {
        return this._catchPhrase;
    }
    public set catchPhrase(value: string) {
        this._catchPhrase = value;
    }
    private _bs: string;
    public get bs(): string {
        return this._bs;
    }
    public set bs(value: string) {
        this._bs = value;
    }

}