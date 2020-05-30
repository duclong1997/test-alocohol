export class CoronaVietNameReq{
    private _operationName: string;
    public get operationName(): string {
        return this._operationName;
    }
    public set operationName(value: string) {
        this._operationName = value;
    }
    private _variables: {};
    public get variables(): {} {
        return this._variables;
    }
    public set variables(value: {}) {
        this._variables = value;
    }
    private _query: string;
    public get query(): string {
        return this._query;
    }
    public set query(value: string) {
        this._query = value;
    }

}