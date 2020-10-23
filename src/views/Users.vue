<template>
  <div class="user-list">
    <router-link to="/user-register">
      <h1>
        Add new user
      </h1>
    </router-link>

    <UserTable :users="users" @delete-user="deleteUserFromList"> </UserTable>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import UserTable from "@/components/UserTable.vue";
import { computed, onMounted, reactive } from "vue";
import useUsers from "../modules/useUsers";
import state from "../state"

export default {
  components: {
    UserTable
  },
  setup() {
    const { addUser, deleteUser, fetchUsers } = useUsers();
    const users = state.userList.value


    async function deleteUserFromList(id: number) {
      await deleteUser(id);
    }

    onMounted(() => {
      fetchUsers()
    })

    return {
      users: computed(() => users),
      deleteUserFromList
    };
  }
};
</script>
