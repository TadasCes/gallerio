<template>
  <div class="user-list">
    <form @submit.prevent="addNewUser">
      <label>New user</label>
      <input v-model="user.name" name="userName" />
      <input v-model="user.age" name="userAge" />
      <input v-model="user.email" name="userEmail" />
      <button>Create new user</button>
    </form>
    <router-link to="/user-register">Add new user</router-link>

    <UserTable :users="users" @delete-user="deleteUserFromList"> </UserTable>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import UserTable from "@/components/UserTable.vue";
import { computed, reactive, ref, watch } from "vue";
import useUsers from "../modules/useUsers";

export default {
  components: {
    UserTable
  },
  setup() {
    const { users, addUser, deleteUser } = useUsers();
    const user = reactive({
      name: "",
      age: 0,
      email: ""
    });

    async function addNewUser() {
      await addUser(user.name, user.age, user.email);
    }

    async function deleteUserFromList(id: number) {
      await deleteUser(id)
    }

    return {
      user,
      users: computed(() => users.value),
      addNewUser,
      deleteUserFromList
    };
  }
};
</script>
