import { IAddress } from './IAddress';
export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  website: string;
  address: IAddress;
}
