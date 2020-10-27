import { computed, Ref, ref, toRef } from "vue";
import { IUser } from "../models/IUser";
import state from "../state";
import axios, { AxiosResponse } from "axios";

export default function useUserService() {
  async function fetchAllUsers() {
    await axios
      .get("http://localhost:3000/users")
      .then((response) => {
        state.userList.value = response.data;
        return true;
      })
      .catch(() => {
        console.log("No users created");
        return false;
      });
  }

  async function postUser() {
    await axios
      .post("http://localhost:3000/users", state.userForm)
      .then(() => {
        console.log("User created successfully");
      })
      .catch(() => {
        console.log("Error happend");
      });
  }

  async function fetchOneUser(name: string) {
    await axios
      .get("http://localhost:3000/users/" + name)
      .then((response) => {
        console.log(response.data);
        state.userForm = response.data 
      })
      .catch(() => {
        console.log("No user");
      });
  }

  return {
    fetchAllUsers,
    postUser,
    fetchOneUser
  };
}
