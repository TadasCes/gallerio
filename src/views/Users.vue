<template>
  <div class="user-list">
    <form @submit.prevent="addNewUser">
      <label>New user</label>
      <input v-model="user.name" name="userName" />
      <input v-model="user.age" name="userAge" />
      <input v-model="user.email" name="userEmail" />
      <button>Create new user</button>
    </form>
    <UserTable :users="users"> </UserTable>
  </div>
</template>

<style scoped>
#table-id {
  width: 5%;
}
</style>

<script lang="ts">
import UserTable from "@/components/UserTable.vue";
import { reactive, ref } from "vue";
import useUsers from "../modules/useUsers";

export default {
  components: {
    UserTable
  },
  setup() {
    const { users, addUser } = useUsers();
    const user = reactive({
      name: "",
      age: 0,
      email: ""
    })

    function addNewUser() {
      addUser(user.name, user.age, user.email)
      console.log(users)
    }

    function deleteUser(id: number) {
      console.log(id);
    }

    return {
      user,
      users,
      addNewUser,
      deleteUser
    };
  }
};
</script>
