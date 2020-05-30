import { Alert } from '../model/alert';

export class ServereWeatherAletRes{
    public lat: string;
    public lon: string;
    public timezone: string;
    public city_name: string;
    public state_code: string;
    public country_code: string;
    public alerts : Alert[];
}