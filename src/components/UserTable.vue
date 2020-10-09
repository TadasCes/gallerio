<template>
  <table class="table table-striped table-bordered">
    <thead class="thead-dark">
      <tr>
        <th scope="col" id="table-id">#</th>
        <th scope="col">
          Name
          <i class="material-icons" @click="sortArrayByName">arrow_drop_down</i>
        </th>
        <th scope="col">
          Age
          <i class="material-icons" @click="sortArrayByAge">arrow_drop_down</i>
        </th>
        <th scope="col">
          Email
          <i class="material-icons" @click="sortArrayByEmail">arrow_drop_down</i>
        </th>
        <th scope="col">
          Actions
          <i class="material-icons" >arrow_drop_down</i>
        </th>
      </tr>
    </thead>
    <tbody>
      <UserRow
        v-for="user in users"
        :key="user.name"
        :user="user"
        @delete-user="deleteUser"
      ></UserRow>
    </tbody>
  </table>
</template>


<script lang="ts">
import UserRow from "./UserRow.vue";

export default {
  components: {
    UserRow
  },
  props: {
    users: {
      type: String,
    }
  },
  setup(props, { emit }) {
    function showUsers() {
      console.log(props.users);
    }

    return {

      };
  }
};
</script>
