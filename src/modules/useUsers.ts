import { computed, Ref, ref, toRef } from "vue";
import { IUser } from "../models/IUser";
import state from "../state";
import axios, { AxiosResponse } from "axios";

export default function useUsers() {

  function addUser(user: IUser) {
    state.userList.value.push(user);
    console.log(state.userList.value);
  }

  function deleteUser(id: number) {
    const user = state.userList.value.find((user) => user.id == id);
    user != undefined
      ? state.userList.value.splice(state.userList.value.indexOf(user), 1)
      : console.log("No user");
  }

  function fetchUsers() {
    axios.get("http://localhost:3000/users").then((response) => {
      state.userList.value = response.data;
    });
  }

  return {
    addUser,
    deleteUser,
    fetchUsers
  };
}
