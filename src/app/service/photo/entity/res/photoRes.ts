export class PhotoRes {
    private _albumId: number;
    private _id: number;
    private _url: string;
    private _title: string;
    private _thumbnailUrl: string;
    
    public get albumId(): number {
        return this._albumId;
    }
    public set albumId(value: number) {
        this._albumId = value;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }

    public get thumbnailUrl(): string {
        return this._thumbnailUrl;
    }
    public set thumbnailUrl(value: string) {
        this._thumbnailUrl = value;
    }
}