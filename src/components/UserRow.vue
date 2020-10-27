<template>
  <tr>
    <td>{{ user.name }} {{ user.lastName }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.country }}</td>
    <td>{{ user.city }}</td>

    <td class="w-25">
      <button @click="deleteUser" class="btn btn-outline-danger">Delete</button>
      <button @click="editUser(user.name)" class="btn btn-outline-danger">Edit</button>
    </td>
  </tr>
</template>

<script lang="ts">
import Users from "../views/Users.vue";
import { watch } from "vue";
import useUserService from "@/modules/useUserService";
import router from "@/router";

export default {
  emits: ["delete-user"],
  props: ["user"],
  setup(props: any, { emit }: any) {
    const { fetchOneUser } = useUserService();
    function deleteUser() {
      emit("delete-user", props.user.id);
    }

    function editUser(name: string) {
      fetchOneUser(name);
      router.push("/user-edit/" + name);
    }

    return { deleteUser, editUser };
  }
};
</script>
