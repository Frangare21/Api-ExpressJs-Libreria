export interface IUser extends Document {
    full_name: string;
    email: string;
    password: string;
}