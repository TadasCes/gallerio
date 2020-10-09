import { User } from "@/models/User";
import { reactive, Ref, ref } from "vue";

export default function useUsers() {
  interface User {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const users: Ref<User[]> = ref([]);

  function addUser(name: string, age: number, email: string) {
    users.value.push({ id: users.value.length, name, age, email });
  }

  

  return { users, addUser };
}
