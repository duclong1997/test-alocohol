import { UserModel } from '../model/userModel';
import { CompanyModel } from '../model/companyModel';

export class UserRes{
    private _id: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _username: string;
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    private _email: string;
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    private _address: UserModel;
    public get address(): UserModel {
        return this._address;
    }
    public set address(value: UserModel) {
        this._address = value;
    }
    private _phone: string;
    public get phone(): string {
        return this._phone;
    }
    public set phone(value: string) {
        this._phone = value;
    }
    private _website: string;
    public get website(): string {
        return this._website;
    }
    public set website(value: string) {
        this._website = value;
    }
    private _company: CompanyModel;
    public get company(): CompanyModel {
        return this._company;
    }
    public set company(value: CompanyModel) {
        this._company = value;
    }
}