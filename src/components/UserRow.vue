<template>
  <tr>
    <td>{{ user.name }} {{ user.lastName }}</td>
    <td>{{ user.email }}</td>
    <td>{{ user.age }}</td>
    <td>{{ user.address.country }}</td>
    <td>{{ user.address.city }}</td>

    <td class="w-25">
      <button @click="deleteUser" class="btn btn-outline-danger">
        Delete
      </button>
      <button @click="editUser(user.name)" class="btn btn-outline-danger">
        Edit
      </button>
    </td>
  </tr>
</template>

<script lang="ts">
import useUserService from '@/modules/useUserService';
import router from '@/router';

export default {
  emits: ['delete-user'],
  props: {
    user: Object,
  },
  // eslint-disable-next-line
  setup(props: any, { emit }: any) {
    const { fetchOneUser } = useUserService();
    function deleteUser() {
      emit('delete-user', props.user.name);
    }

    async function editUser(name: string) {
      await fetchOneUser(name);
      router.push('/user-edit/' + name);
    }

    return { deleteUser, editUser };
  },
};
</script>
