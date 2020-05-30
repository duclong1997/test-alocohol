export class Alert{
    public title :string;
    public description :string;
    public severity :string;
    public effective_utc : string;
    public effective_local :string;
    public expires_utc :string;
    public expires_local: string;
    public uri: string;
    public regions : string[];
}