<template>
  <div class="user-list">
    <div>
      <Menu></Menu>
    </div>
    <div>
      <router-link to="/user-new">
        <h1>
          Add new user
        </h1>
      </router-link>
      <UserTable
        v-if="dataLoaded == true"
        :users="users"
        @delete-user="deleteUserFromList"
      >
      </UserTable>
    </div>
  </div>
</template>

<style scoped></style>

<script lang="ts">
import UserTable from '@/components/UserTable.vue';
import { computed, onMounted, reactive, ref } from 'vue';
import useUserService from '../modules/useUserService';
import state from '../state';
import Menu from '@/components/Menu.vue'; // @ is an alias to /src

export default {
  components: {
    UserTable,
    Menu,
  },
  setup() {
    const { fetchAllUsers, deleteUser } = useUserService();
    const dataLoaded = ref(false);
    const users = reactive({
      userList: state.userList,
    });

    async function deleteUserFromList(name: string) {
      await deleteUser(name);
    }

    async function getAllUsers() {
      await fetchAllUsers();
      users.userList = state.userList.value;
      dataLoaded.value = true;
    }

    onMounted(() => {
      getAllUsers();
    });
    return {
      users: computed(() => state.userList.value),
      dataLoaded,
      deleteUserFromList,
    };
  },
};
</script>
