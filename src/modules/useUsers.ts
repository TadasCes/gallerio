import { IUser } from '../models/IUser';
import state from '../state';

export default function useUsers() {
  function addUser(user: IUser) {
    state.userList.value.push(user);
    console.log(state.userList.value);
  }

  return {
    addUser,
    // deleteUser
  };
}
