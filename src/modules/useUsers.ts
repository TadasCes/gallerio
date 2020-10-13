import { computed, reactive, Ref, ref } from "vue";
import { IUser } from "../models/IUser";


export default function useUsers() {
  const users: Ref<IUser[]> = ref([
    { id: 0, name: "jonas", age: 65, email: "sdas@as.asd" },
    { id: 1, name: "paulius", age: 15, email: "edas@as.asd" },
    { id: 2, name: "alaa", age: 35, email: "das@as.asd" },
    { id: 3, name: "tomas", age: 25, email: "adas@as.asd" },
    { id: 4, name: "benas", age: 5, email: "zdas@as.asd" },
    { id: 5, name: "jurgis", age: 75, email: "cdas@as.asd" }
  ]);

  async function addUser(name: string, age: number, email: string) {
    users.value.push({ id: users.value.length, name, age, email });
  }

  async function deleteUser(id: number) {
    const user = users.value.find((user) => user.id == id);
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
