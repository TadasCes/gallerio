<template>
  <div>
    <p>Seach by name</p>
    <input @keyup="searchUser" v-model="searchString" name="search" />
    <button>Search</button>
  </div>
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          Name
          <button>
            <i class="material-icons" @click="sortByName">arrow_drop_down</i>
          </button>
        </th>
        <th scope="col">
          Email
          <i class="material-icons" @click="sortByEmail">arrow_drop_down</i>
        </th>
        <th scope="col">
          Age
          <i class="material-icons" @click="sortByAge">arrow_drop_down</i>
        </th>
        <th scope="col">
          Country
          <i class="material-icons">arrow_drop_down</i>
        </th>
        <th scope="col">
          City
        </th>
        <th scope="col">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <UserRow
        v-for="user in displayedList"
        :key="user.name"
        :user="user"
        @delete-user="deleteUser"
      ></UserRow>
    </tbody>
  </table>
</template>

<script lang="ts">
import { computed, ComputedRef, onMounted, Ref, ref, watch } from 'vue';
import UserRow from './UserRow.vue';
import useUsersTable from '@/modules/useUsersTable';
import { IUser } from '../models/IUser';
import state from '@/state';
import { IAddress } from '@/models/IAddress';

export default {
  emits: ['delete-user'],
  components: {
    UserRow,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup(props: any, { emit }: any) {
    const {
      useSortByName,
      useSortByAge,
      useSortByEmail,
      useSearchUser,
    } = useUsersTable();

    const userList: ComputedRef<IUser[]> = computed(() => props.users);
    let displayedList: Ref<IUser[]> = ref([]);

    const searchString = ref('');
    const isSearching = () => {
      return searchString.value !== '' ? true : false;
    };

    watch(userList.value, () => {
      displayedList.value = userList.value;
    });

    function sortByName() {
      displayedList = useSortByName(displayedList);
    }
    function sortByAge() {
      displayedList = useSortByAge(displayedList);
    }
    function sortByEmail() {
      displayedList = useSortByEmail(displayedList);
    }

    function searchUser() {
      displayedList.value = useSearchUser(userList, searchString.value);
    }

    function deleteUser(id: number) {
      emit('delete-user', id);
      searchString.value = '';
    }

    onMounted(() => {
      displayedList.value = userList.value;
      const userAddress: IAddress = {
        country: '',
        city: '',
        streetAddress: '',
        zipCode: 0,
      };

      state.userForm = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        age: 0,
        website: '',
        address: userAddress,
      };
    });

    return {
      sortByName,
      sortByAge,
      sortByEmail,
      deleteUser,
      userList,
      searchString,
      searchUser,
      displayedList,
    };
  },
};
</script>
