import { IAddress } from "@/models/IAddress";
import { computed, Ref, ref } from "vue";
import { IUser } from "../models/IUser";

export default function useUsers() {
  const users: Ref<IUser[]> = ref([]);
  const userAddress: IAddress = {
    country: "",
    city: "",
    streetAddress: "",
    zipCode: 0
  };
  async function addUser() {
    users.value.push({
      id: 0,
      name: "",
      lastName: "",
      email: "",
      password: "",
      age: 0,
      website: "",
      address: userAddress
    });
  }

  async function deleteUser(id: number) {
    const user = users.value.find(user => user.id == id);
    user != undefined
      ? users.value.splice(users.value.indexOf(user), 1)
      : console.log("No user");
  }

  return {
    users: computed(() => users.value),
    addUser,
    deleteUser
  };
}
