<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.email }}</td>
    <td class="w-25">
      <button @click="deleteUser" class="btn btn-outline-danger">Delete</button>
    </td>
  </tr>
</template>

<script lang="ts">
import Users from "../views/Users.vue";
import { watch } from "vue";

export default {
  emits: ["delete-user"],
  props: ["user"],
  setup(props: any, { emit }: any) {
    function deleteUser() {
      emit("delete-user", props.user.id);
    }
    return { deleteUser };
  }
};
</script>
