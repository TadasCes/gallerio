import { IAddress } from './IAddress';
import { IPicture } from './IPicture';
export interface IUser {
  name: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  website: string;
  address: IAddress;
}
