import { User } from "@/models/User";
import { computed, reactive, Ref, ref } from "vue";

export default function useUsers() {
  interface User {
    id: number;
    name: string;
    age: number;
    email: string;
  }
  const users: Ref<User[]> = ref([]);

  function consoleUsers() {
    users.value.forEach((user) => {
      console.log(user);
    });
  }

  async function addUser(name: string, age: number, email: string) {
    users.value.push({ id: users.value.length, name, age, email });
    consoleUsers();
  }

  async function deleteUser(id: number) {
    console.log(id);
    console.log(users.value[0]);

    users.value.splice(id, 1);

    consoleUsers();
  }

  return {
    users: computed(() => users.value),
    addUser,
    deleteUser
  };
}
