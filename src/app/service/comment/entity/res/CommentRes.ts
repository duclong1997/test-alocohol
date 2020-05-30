export class CommentRes{
    private _id: number;
    private _postId: number;
    private _name: string;
    private _email: string;
    private _body: string;

    public get postId(): number {
        return this._postId;
    }

    public set postId(value: number) {
        this._postId = value;
    }
    
    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get body(): string {
        return this._body;
    }

    public set body(value: string) {
        this._body = value;
    }
    
}