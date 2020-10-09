<template>
  <tr>
    <td>{{ user.id }}</td>
    <td>{{ user.name }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.email }}</td>
    <td class="w-25">
      <button @click="deleteUserFromList" class="btn btn-outline-danger">Delete</button>
    </td>
  </tr>
</template>

<script lang="ts">
import useUsers from "../modules/useUsers";
import { watch } from "vue";

export default {
  props: ["user"],
  setup(props: any, { emit }: any) {
    const { deleteUser } = useUsers();

    async function deleteUserFromList() {
      await deleteUser(props.user.id);
    }

    return { deleteUserFromList };
  }
};
</script>
