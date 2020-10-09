<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.email }}</td>
    <td class="w-25">
      <button @delete-user="deleteUser" class="btn btn-outline-danger">Delete</button>
    </td>
  </tr>
</template>

<script lang="ts">
import deleteUser from "../views/Users.vue";
import { watch } from "vue";

export default {
  props: ["user"],
  setup(props: any, { emit }: any) {
    emit("delete-user", props.user.id);
  }
};
</script>
