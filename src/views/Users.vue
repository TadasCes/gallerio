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
import { computed, onBeforeMount, onMounted, reactive, ref, Ref } from "vue";
import useUsers from "../modules/useUsers";
import useUserService from "../modules/useUserService";
import state from "../state";
import { IUser } from "@/models/IUser";

export default {
  components: {
    UserTable
  },
  setup() {
    const { addUser, deleteUser } = useUsers();
    const { fetchAllUsers } = useUserService();
    const users: Ref<IUser[]> = ref([]);

    async function deleteUserFromList(id: number) {
      await deleteUser(id);
    }
    console.log(users.value);

    async function getAllUsers() {
      await fetchAllUsers();
      users.value = state.userList.value;
      console.log(users.value);
    }

    getAllUsers();
    return {
      users: computed(() => state.userList.value),
      deleteUserFromList
    };
  }
};
</script>
